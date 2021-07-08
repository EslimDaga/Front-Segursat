// Force zIndex of Leaflet
(function(global){
  var MarkerMixin = {
    _updateZIndex: function (offset) {
      this._icon.style.zIndex = this.options.forceZIndex ? (this.options.forceZIndex + (this.options.zIndexOffset || 0)) : (this._zIndex + offset);
    },
    setForceZIndex: function(forceZIndex) {
      this.options.forceZIndex = forceZIndex ? forceZIndex : null;
    }
  };
  if (global) global.include(MarkerMixin);
})(L.Marker);

const api = new Api()

class MapView {

  constructor() {

    this.map;
    this.units = [];
    this.markers = [];
    //this.markerCluster = L.markerClusterGroup();
    this.historyMarkers = [];
    this.historyPaths = [];
    this.geofences = [];
    this.historyPlaybackMarker;
    /* this.searchActions(); */
  }
  /* searchActions =() =>{
    $('#input-search').on('keyup', function() {
      var rex = new RegExp($(this).val(), 'i');
      var count = 0;
      $('.searchable-container .items').hide();
      $('.searchable-container .items').filter(function() {
        count++;
        return rex.test($(this).text());
      }).show();
      console.log(count);
      $('.result-count span').text(count);
    });
    $("#container").height(($("#container").height()+$("#sidebar-map").height())-800);
    $("#advanced_search").click(function(){
      $("#result_advanced_search").toggle();
    });
  }  */
  renderUnitsInUnitTab = (units) => {
    let unitList = "";
    for (let i = 0; i < units.length; i++) {
      if (units[i].last_speed > 0) {
        //console.log(units[i]);
        const unit =
          `
        <div onclick="mapView.unitSelect('${units[i].name}')" class="items">
          <div class="avatar avatar-sm">
            <img src="/static/assets/img/others/car-solid.svg" class="rounded-circle">
          </div>
          <div>
            <div class="user-name">
              <p class="">${units[i].name}</p>
            </div>
            <div style="font-size : 12px">
              ${units[i].description}
            </div>
          </div>
          <div class="user-status">
            <i class="fas fa-info-circle"></i>
          </div>
        </div>
      `;
        unitList += unit;
      }else{
        //console.log(units[i]);
        const unit =
          `
        <div onclick="mapView.unitSelect('${units[i].name}')" class="items">
          <div class="avatar avatar-sm">
            <img src="/static/assets/img/others/car-solid.svg" class="rounded-circle">
          </div>
          <div>
            <div class="user-name">
              <p class="">${units[i].name}</p>
            </div>
            <div style="font-size : 12px">
              ${units[i].description}
            </div>
          </div>
          <div class="user-status">
            <i class="fas fa-info-circle"></i>
          </div>
        </div>
      `;
        unitList += unit;
      }

    }
    document.getElementById("unit-list").innerHTML = unitList;
  }

  renderUnitsInHistoryTab = (units) => {
    let unitList = "";
    /* console.log(units); */
    $('.result-count span').text(units.length);;
    for (let i = 0; i < units.length; i++) {
      const unit =
      `
        <option value="${units[i].name}">${units[i].name} - ${units[i].description}</option>
      `;
      unitList += unit;
    }
    document.getElementById("history-units").innerHTML = unitList;
  }

  renderUnitMarkers = (units) => {
    for (let i = 0; i < units.length; i++) {
      const icon = L.divIcon({
        iconSize:null,
        html:`
        <div class="map-label">
          <div class="map-label-content">
            <img src="/static/assets/img/markers/cars.png" width="20" height="40"/>
          </div>
        </div>
        `
      });
      const marker = new L.marker(
        [units[i].last_latitude,units[i].last_longitude],
        {
          icon: icon,
          title: units[i].name,
          description : units[i].description,
          rotationAngle: units[i].last_angle
        }
      ).bindTooltip(`<div class="text-center font-weight-bold" style="font-size: 11px;">${units[i].name}</div><div class="text-center" style="font-size: 11px;"> ${units[i].description} </div>`, {
        permanent: true,
        direction : "top",
        className: "leaflet-tooltip-own",
        offset: L.point({x: 0, y: -20})
      }).addTo(this.map);
      this.markers.push(marker);
      //this.markerCluster.addLayer(marker);
    }
    //this.map.addLayer(this.markerCluster);
  }

  renderMap = (units) => {
    this.map = L.map('map',{
      center: [-12.004502, -77.094823],
      zoom: 12,
    });
    const openStreetMap = L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 19,
      }
    );
    const googleStreetsMap = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
      attribution: '&copy; <a href="https://maps.google.com/">Google Maps</a>',
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
    });
    const googleHybridMap = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
      attribution: '&copy; <a href="https://maps.google.com/">Google Maps</a>',
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
    });
    const baseLayers = {
      'Open Street Maps': openStreetMap,
      'Google Street Maps': googleStreetsMap,
      'Google Hybrid Maps': googleHybridMap
    };
    let overlays = {};
    L.control.layers(baseLayers,overlays).addTo(this.map);
    baseLayers['Google Street Maps'].addTo(this.map);
    this.renderUnitMarkers(units);
  }

  searchUnitMarker = (unitName) => {
    let index = -1
    for (let i=0;i<this.markers.length;i++) {
      if (this.markers[i].options.title == unitName) {
        index = i;
        break;
      }
    }
    return index;
  }

  unitSelect = async (unitName) => {
    $("#copiar_placa").show();
    const index = this.searchUnitMarker(unitName);
    const lat = this.markers[index].getLatLng().lat;
    const lng = this.markers[index].getLatLng().lng;
    const angle = this.markers[index].options.rotationAngle;
    const title = mapView.markers[index].options.title
    const description = mapView.markers[index].options.description

    for (let i=0;i<this.markers.length;i++) {
      this.markers[i].setForceZIndex(null);
    }
    this.map.removeLayer(this.markers[index])
    const icon = L.divIcon({
      iconSize:null,
      html:`
      <div class="map-label">
        <div class="map-label-content">
          <img src="/static/assets/img/markers/cars.png" width="20" height="40"/>
        </div>
      </div>
      `
    });
    const marker = new L.marker(
      [lat,lng],
      {
        icon: icon,
        title: title,
        description : description,
        rotationAngle: angle,
        forceZIndex: 1000
      }
    ).bindTooltip(`<div class="text-center font-weight-bold" style="font-size: 11px;">${title}</div><div class="text-center" style="font-size: 11px;">${description}</div>`, {
      permanent: true,
      direction : "top",
      className: "leaflet-tooltip-own",
      offset: L.point({x: 0, y: -20})
    }).addTo(this.map);
    this.markers[index] = marker;

    const streetViewURL = `http://maps.google.com/maps?q=&amp;layer=c&amp;cbll=${lat},${lng}&amp;cbp=11,96,0,0,0`;
    //this.map.panTo([lat,lng]);
    this.map.setView([lat,lng],16);
    //almacenar en el local storage la unidad seleccionada
    localStorage.setItem("selectedUnit", unitName);
    //llamar a get unit
    const unit = await api.getUnit(unitName);
    /* console.log(unit); */
    document.getElementById("unitNameSelect").innerHTML = `${unit.name}`;
    if(unit.description.length > 0){
      document.getElementById("description").innerHTML = `${unit.description}`;
    }else{
      document.getElementById("description").innerHTML = `Sin descripción`;
    }
    document.getElementById("speed").innerHTML = `${unit.last_speed} km/h`;
    document.getElementById("rssi").innerHTML = `${unit.last_attributes.rssi} %`;
    if (unit.last_attributes.out1){
      document.getElementById("blocking").innerHTML = `<span class="badge badge-danger"> Bloqueado </span>`;
    }else{
      document.getElementById("blocking").innerHTML = `<span class="badge badge-success"> Sin bloqueo </span>`;
    }
    document.getElementById("battery").innerHTML = `${unit.last_attributes.battery} %`;
    /* document.getElementById("address_link").innerHTML = `<a href='https://www.google.com/maps?q=${lat},${lng}&t=m&hl=en' target="_blank" class="btn btn-xs btn-default">
      <i class="fas fa-eye"></i>
    </a>` */
    document.getElementById("address").innerHTML = `${unit.last_address} <div class="d-flex"> <a href='https://www.google.com/maps?q=${lat},${lng}&t=m&hl=en' target="_blank" class="btn btn-xs btn-default">
      (<i class="fas fa-eye"></i>)
    </a><p id="streetView"></p></div>`;
    document.getElementById("streetView").innerHTML = `<a href='${streetViewURL}' class="btn btn-xs btn-default" target="_blank"><i class="fas fa-street-view"></i></a>`;
    /* Begin add for Eslim*/
    /* if (unit.last_speed > 0) {
      document.getElementById("status").innerHTML = `<span data-device="status" style="background-color: green" title="Online">Online</span><span data-device="status-text"> Online</span>`;
    }else{
      document.getElementById("status").innerHTML = `<span data-device="status" style="background-color: red" title="ACK">ACK</span><span data-device="status-text"> ACK</span>`;
    } */

    if (unit.last_attributes.ignition) {
      document.getElementById("ignition").innerHTML = `<span class="badge badge-success"> Encendido </span>`;
    }else{
      document.getElementById("ignition").innerHTML = `<span class="badge badge-danger"> Apagado </span>`;
    }
    document.getElementById("satellites").innerHTML = `${unit.last_attributes.sat}`;
    document.getElementById("last_report").innerHTML = `${unit.last_report}`;
    /* End add for Eslim*/
    document.getElementById('waze-modal-body').innerHTML = `<iframe id="Waze-Map" src="https://embed.waze.com/iframe?zoom=15&lat=${unit.last_latitude}&lon=${unit.last_longitude}&pin=1" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px"></iframe>`
    document.getElementById("waze").innerHTML = `<a href="#" onclick="$('#waze-modal').modal('show');">Abrir mapa</a>`;
  }

  updateMarkerPosition = (unitName,latLng,angle) => {
    const index = this.searchUnitMarker(unitName);
    this.markers[index].setLatLng(latLng);
    this.markers[index].setRotationAngle(angle);
  }

  updateBottomBar = async (unit_name) => {
    const selectedUnit = localStorage.getItem("selectedUnit")
    if (selectedUnit == unit_name) {
      const unit = await api.getUnitStatus(unit_name);
      //console.log(unit);
      const lat = unit.last_latitude;
      const lng = unit.last_longitude;
      document.getElementById("address").innerHTML = `${unit.last_address}`;
      document.getElementById("last_report").innerHTML = `${unit.last_report}`;
      document.getElementById("speed").innerHTML = `${unit.last_speed} km/h`;
      document.getElementById("rssi").innerHTML = `${unit.last_attributes.rssi} %`;
      if (unit.last_attributes.out1){
        document.getElementById("blocking").innerHTML = `<span class="badge badge-danger"> Bloqueado </span>`;
      }else{
        document.getElementById("blocking").innerHTML = `<span class="badge badge-success"> Sin bloqueo </span>`;
      }
      document.getElementById("battery").innerHTML = `${unit.last_attributes.battery} %`;
      if (unit.last_attributes.ignition) {
        document.getElementById("ignition").innerHTML = `<span class="badge badge-success"> Encendido </span>`;
      }else{
        document.getElementById("ignition").innerHTML = `<span class="badge badge-danger"> Apagado  </span>`;
      }
      /* document.getElementById("satellites").innerHTML = `${unit.last_attributes.sat}`; */
    }
  }

  drawLocationHistory = async (unitName,initialDate,finalDate,markerCheckbox,playbackCheckbox,speedRange) => {
    runLoader();
    this.cleanMap()
    const locationHistory = await api.getLocationHistory(unitName,initialDate,finalDate);
    let route = [];
    let angles = [];
    for (let i=0;i<locationHistory.length;i++) {
      route.push([locationHistory[i].latitude, locationHistory[i].longitude]);
      angles.push(locationHistory[i].angle);
      // Si no esta marcado playback, se dibujan los marcadores
      if (playbackCheckbox == false) {
        if (i == locationHistory.length-1) {
          const icon = L.divIcon({
            iconSize:null,
            html:`
            <div class="map-label">
              <div class="map-label-content">
                <img src="/static/assets/img/markers/cars.png" width="20" height="40"/>
              </div>
            </div>
            `
          });
          this.historyMarkers.push(
            new L.marker(
              [locationHistory[i].latitude,locationHistory[i].longitude],
              {
                icon: icon,
                title: locationHistory[i].unit_name,
                rotationAngle: locationHistory[i].angle
              }
            ).bindTooltip(`${locationHistory[i].unit_name}`, {
              permanent: true,
              direction : "top",
              offset: L.point({x: 0, y: -20})
            })
            .addTo(this.map)
            .setZIndexOffset(1000)
          );
        }
        else {
          if (markerCheckbox == true){
            const icon = new L.Icon.Default();
            icon.options.shadowSize = [0,0];
            this.historyMarkers.push(
              new L.marker(
                [locationHistory[i].latitude,locationHistory[i].longitude],
                {
                  icon: icon,
                }
              )
              .addTo(this.map)
              .setZIndexOffset(100)
                .bindTooltip(`<div class="text-center">${locationHistory[i].speed} Km/h<div>
                <div class="text-center">${locationHistory[i].latitude} <div>
                <div class="text-center">${locationHistory[i].lontigude} <div>
                <div class="text-center">${locationHistory[i].timestamp} <div>`,{
                direction : "top"
              })
            )
          }
        }
      }
    }
    // si playback esta marcado se dibuja el marcador con movimiento
    if (playbackCheckbox == true){
      var marker1 = L.Marker.movingMarker(route,(100-speedRange)*100).addTo(this.map);
      marker1.once('click', function () {
        marker1.start();
        marker1.closePopup();
        marker1.unbindPopup();
        marker1.on('click', function() {
          if (marker1.isRunning()) {
            marker1.pause();
          } else {
            marker1.start();
          }
        });
        setTimeout(function() {
          marker1.bindPopup('<b>Click para detener !</b>').openPopup();
        }, 10000);
      });
      marker1.bindPopup('<b>Click para empezar !</b>', {closeOnClick: false});
      marker1.openPopup();
    }
    // termina el playback y se dibuja la linea
    this.historyPaths.push(
      L.polyline.antPath(route, {
        "dashArray": [
          10,
          20
        ],
        "weight": 5,
        "color": "#0000FF",
        "pulseColor": "#FFFFFF",
        delay: 1000
      }).addTo(this.map)
    );
    if (route.length != 0){
      this.map.fitBounds(this.historyPaths[this.historyPaths.length-1].getBounds());
    } else {
      alert('No existen ubicaciones');
    }
    clearLoader();
  }

  cleanMap = () => {
    /*
    this.map.removeLayer(this.markerCluster);
    this.markerCluster = L.markerClusterGroup();
    */
    for (let i=0;i<this.markers.length;i++) {
      this.map.removeLayer(this.markers[i]);
    }
    this.markers = [];
    for (let i=0;i<this.historyMarkers.length;i++) {
      this.map.removeLayer(this.historyMarkers[i]);
    }
    this.historyMarkers = [];
    for (let i=0;i<this.historyPaths.length;i++) {
      this.map.removeLayer(this.historyPaths[i]);
    }
    this.historyPaths = [];
    //clean playback marker
    try {
      this.map.removeLayer(this.historyPlaybackMarker);
      //this.historyPlaybackMarker = undefined;
    } catch (error) {
      console.log("error al limpiar playback marker");
    }
  }

  openUnitTab = async () => {
    this.cleanMap();
    const units = await api.getUnits();
    this.units = units;
    this.renderUnitMarkers(units);
  }

  openHistoryTab = () => {
    this.cleanMap();
  }

  showGeofences = async () => {
    const check = document.getElementById("showGeofenceCheckbox");
    if(check.checked){
      runLoader();
      const geofences = await api.getGeofences();
      for (let i = 0; i < geofences.length; i++) {
        /* Add Eslim */
        const onEachFeature = (feature, layer) => {
          var popupContent = `<div class="text-center" style="font-size:10px">${geofences[i].name}<div>` + `<div class="text-center" style="font-size:10px">${geofences[i].description}<div>`;
          if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
          }
          layer.bindTooltip(popupContent,{
            permanent: true,
            direction: "top",
            className: "leaflet-tooltip-own-geofence",
            offset: L.point({ x: 0, y: -20 })
          });
        }
        /* Add Eslim */
        this.geofences.push(L.geoJSON(geofences[i].geojson, {
          onEachFeature: onEachFeature,
        }).addTo(this.map));
      }
      clearLoader();
    }else{
      runLoader();
      for (let i=0;i<this.geofences.length;i++) {
        this.map.removeLayer(this.geofences[i]);
      }
      this.geofences = []
      clearLoader();
    }
  }

  run = async () => {
    localStorage.removeItem('selectedUnit');
    const units = await api.getUnits();
    this.units = units;
    this.renderUnitsInUnitTab(units);
    this.renderMap(units);
    this.renderUnitsInHistoryTab(units);
  }
}
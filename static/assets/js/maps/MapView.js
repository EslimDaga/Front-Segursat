class MapView {

  constructor() {
    this.map;
    this.units = [];
    this.markers = [];
    this.historyMarkers = [];
    this.historyPaths = [];
    this.historyPlaybackMarker;
  }

  getUnits = async () => {
    const url = `/web/api/units/get-units/`
    const response = await fetch(url);
    const units = await response.json();
    return units;
  }
  getUnit = async (name) => {
    const url = `/web/api/units/get-unit/${name}/`;
    const response = await fetch(url);
    const unit = await response.json();
    return unit;
  }
  getLocationHistory = async (unitName,initialDate,finalDate) => {
    const url = `/web/api/locations/get-location-history/${unitName}/${initialDate}/${finalDate}/`
    const response = await fetch(url);
    const locationHistory = await response.json();
    return locationHistory;
  }
  renderUnitsInUnitTab = (units) => {
    let unitList = "";
    for (let i = 0; i < units.length; i++) {
      const unit =
      `
        <div onclick="mapView.unitSelect('${units[i].name}')" class="items">
          <div class="user-name">
            <p class="">${units[i].name}</p>
          </div>
          <div class="user-status">
            <span class="badge badge-primary">
              <div class="details">
                <span data-device="speed">${units[i].device.last_speed} kph</span>
                <span data-device="detect_engine" class="on"><i class="icon detect_engine"></i></span>
                <span data-device="status" style="background-color: green" title="Online">online</span>
              </div>
            </span>
          </div>
        </div>
      `;
      unitList += unit;
    }
    document.getElementById("unit-list").innerHTML = unitList;
  }
  renderUnitsInHistoryTab = (units) => {
    let unitList = "";
    for (let i = 0; i < units.length; i++) {
      const unit =
      `
        <option value="${units[i].name}">${units[i].name}</option>
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
            <img src="/static/assets/img/markers/cars.png" width="26" height="48"/>
          </div>
        </div>
        `
      });
      this.markers.push(
        new L.marker(
          [units[i].device.last_latitude,units[i].device.last_longitude],
          {
            icon: icon,
            title: units[i].name,
            rotationAngle: units[i].device.last_angle
          }
        ).bindTooltip(`${units[i].name}`, {
          permanent: true,
          direction : "top",
          offset: L.point({x: 0, y: -30})
        }).addTo(this.map)
      );
    }
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
    const index = this.searchUnitMarker(unitName);
    const lat = this.markers[index].getLatLng().lat
    const lng = this.markers[index].getLatLng().lng
    const streetViewURL = `http://maps.google.com/maps?q=&amp;layer=c&amp;cbll=${lat},${lng}&amp;cbp=11,96,0,0,0`;
    this.map.panTo([lat,lng]);
    //almacenar en el local storage la unidad seleccionada
    localStorage.setItem("selectedUnit", unitName);
    //llamar a get unit
    const unit = await this.getUnit(unitName);
    console.log(unit);
    //
    document.getElementById("unitNameSelect").innerHTML = unitName;
    /* document.getElementById("streetView").innerHTML = `<a href='${streetViewURL}' target="_blank"><img alt="Street view" src="https://iadpi.com.ar/wp-content/uploads/2019/05/google-street-696x355.jpg"></a>`; */
    document.getElementById("speed").innerHTML = `${unit.device.last_speed} km/h`;
    document.getElementById("rssi").innerHTML = `${unit.device.last_attributes.rssi} %`;
    document.getElementById("battery").innerHTML = `${unit.device.last_attributes.battery} %`;
    document.getElementById("address_link").innerHTML = `<a href='https://www.google.com/maps?q=${lat},${lng}&t=m&hl=en' target="_blank" class="btn btn-xs btn-default">
      <i class="fas fa-eye"></i>
    </a>`
    document.getElementById("address").innerHTML = `${unit.device.last_address}`;
    /* Begin add for Eslim*/
    document.getElementById("ignition").innerHTML = `${unit.device.last_attributes.ignition}`;
    document.getElementById("satellites").innerHTML = `${unit.device.last_attributes.sat}`;
    /* End add for Eslim*/
  }

  updateMarkerPosition = (unitName,latLng,angle) => {
    const index = this.searchUnitMarker(unitName);
    this.markers[index].setLatLng(latLng);
    this.markers[index].setRotationAngle(angle);
  }

  updateBottomBar = (data) => {
    const selectedUnit = localStorage.getItem("selectedUnit")
    if (selectedUnit == data['unit_name']) {
      console.log(`Actualizar informacion del bottom bar ${unitName}`)
    }
  }

  drawLocationHistory = async (unitName,initialDate,finalDate,markerCheckbox,playbackCheckbox,speedRange) => {
    this.cleanMap()
    const locationHistory = await this.getLocationHistory(unitName,initialDate,finalDate);
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
                <img src="/static/assets/img/markers/cars.png" width="26" height="48"/>
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
              offset: L.point({x: 0, y: -30})
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
              .bindTooltip(`${locationHistory[i].speed} Km/h`,{
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
    this.map.fitBounds(this.historyPaths[this.historyPaths.length-1].getBounds());
  }

  cleanMap = () => {
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
    const units = await this.getUnits();
    this.units = units;
    this.renderUnitMarkers(units);
  }

  openHistoryTab = () => {
    this.cleanMap();
  }

  run = async () => {
    const units = await this.getUnits();
    this.units = units;
    this.renderUnitsInUnitTab(units);
    this.renderMap(units);
    this.renderUnitsInHistoryTab(units);
  }

}
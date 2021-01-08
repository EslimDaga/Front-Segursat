class MapView {

  constructor() {
    this.map;
    this.units = [];
    this.markers = [];
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
  getLocationHistory = async (unitName) => {
    const url = `/web/api/locations/get-location-history/${unitName}/`
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
  renderUnitsInUnitTabTravel = (units) => {
    let unitList = "";
    for (let i = 0; i < units.length; i++) {
      const unit =
      `
        <option value="${units[i].name}">${units[i].name}</option>
      `;
      unitList += unit;
    }
    document.getElementById("unit-list-travel").innerHTML = unitList;
  }
  searchHistory = () => {
    const date_from = document.getElementById("date_from").value;
    const date_to = document.getElementById("date_to").value;
    const unit = document.getElementById("unit-list-travel").value;

    if (date_from === "") {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Seleccione una fecha',
        padding: '2em'
      })
    }else{
      console.log(date_from);
    }
    if (date_to === "") {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Seleccione una fecha',
        padding: '2em'
      })
    }else{
      console.log(date_to);
    }
    if (unit === "") {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Seleccione una unidad',
        padding: '2em'
      })
    }else{
      console.log(unit);
    }
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
    document.getElementById("streetView").innerHTML = `<a href='${streetViewURL}' target="_blank"><img alt="Street view" src="https://iadpi.com.ar/wp-content/uploads/2019/05/google-street-696x355.jpg"></a>`;
    document.getElementById("speed").innerHTML = `${unit.device.last_speed} km/h`;
    document.getElementById("rssi").innerHTML = `${unit.device.last_attributes.rssi}`;
    document.getElementById("battery").innerHTML = `${unit.device.last_attributes.battery}`;
    document.getElementById("address_link").innerHTML = `<a href='https://www.google.com/maps?q=${lat},${lng}&t=m&hl=en' target="_blank" class="btn btn-xs btn-default">
      <i class="fas fa-eye"></i>
    </a>`
    document.getElementById("address").innerHTML = `${unit.device.last_address}`;
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

  drawLocationHistory = async (unitName) => {
    const locationHistory = await this.getLocationHistory(unitName);
    let route = [];
    let markers = [];
    for (let i=0;i<locationHistory.length;i++) {
      route.push([locationHistory[i].latitude, locationHistory[i].longitude]);
      const icon = L.divIcon({
        iconSize:null,
        html:`<div class="map-label"><div class="map-label-content">
        <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-a5485b563efc4511e0cd8bd04ad0fe9e.png" width="36" height="36"/>
        </div><div class="map-label-arrow"></div></div>`
      });
      markers.push(
        new L.marker(
          [locationHistory[i].latitude,locationHistory[i].longitude],
          {
            icon: icon
          }
        )
        .addTo(this.map)
      )
    }
    const path = L.polyline.antPath(route, {
      "dashArray": [
        10,
        20
      ],
      "weight": 5,
      "color": "#0000FF",
      "pulseColor": "#FFFFFF",
      delay: 1000
    }).addTo(this.map);
  }

  cleanMap = () => {
    for (let i=0;i<this.markers.length;i++) {
      this.map.removeLayer(this.markers[i]);
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
    this.renderUnitsInUnitTabTravel(units);
  }

}
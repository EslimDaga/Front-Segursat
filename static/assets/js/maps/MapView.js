/* 
let units;
let markers = [];

const getUnits = async () => {
  const url = `/web/api/units/get-units/`
  const response = await fetch(url);
  const units = await response.json();
  return units;
}
const getUnit = async (name) => {
  const url = `/web/api/units/get-unit/${name}/`;
  const response = await fetch(url);
  const unit = await response.json();
  return unit;
}
const renderUnitsInSidebar = async() => {
  units = await getUnits();
  let unitList = "";
  for (let i = 0; i < units.length; i++) {
    const unit =
    `
      <div onclick="unitSelect('${units[i].name}')" class="items">
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
const unitSelect = async (unitName) => {
  const unit = await getUnit(unitName);
  document.getElementById("unitNameSelect").innerHTML = unitName;
  map.panTo([unit.device.last_latitude,unit.device.last_longitude]);
}
const renderMap = async () => {
  map = L.map('map',{
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
  L.control.layers(baseLayers,overlays).addTo(map);
  baseLayers['Google Street Maps'].addTo(map);

  // getUnits
  const units = await getUnits();

  for (let i = 0; i < units.length; i++) {
    const icon = L.divIcon({
      iconSize:null,
      html:`
      <div class="map-label">
        <div class="map-label-content">
          <img src="/static/assets/img/markers/vehicle.png" width="26" height="48"/>
        </div>
      </div>
      `
    });
    markers.push(
      new L.marker(
        [units[i].device.last_latitude,units[i].device.last_longitude],
        {
          icon: icon,
          title: units[i].name,
          rotationAngle: 0
        }
      ).bindTooltip(`${units[i].name}`, {
        permanent: true,
        direction : "top",
        offset: L.point({x: 0, y: -30})
      })
      .addTo(map)
    );
  }

}

renderUnitsInSidebar();
renderMap(); */


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
  renderUnitsInSidebar = (units) => {
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
  unitSelect = (unitName) => {
    const index = this.searchUnitMarker(unitName);
    const lat = this.markers[index].getLatLng().lat
    const lng = this.markers[index].getLatLng().lng
    const streetViewURL = `http://maps.google.com/maps?q=&amp;layer=c&amp;cbll=${lat},${lng}&amp;cbp=11,96,0,0,0`;
    this.map.panTo([lat,lng]);
    document.getElementById("unitNameSelect").innerHTML = unitName;
    document.getElementById("streetView").innerHTML = `<a href='${streetViewURL}' target="_blank"><img alt="Street view" src="https://iadpi.com.ar/wp-content/uploads/2019/05/google-street-696x355.jpg"></a>`;
  }
  updateMarkerPosition = (unitName,latLng,angle) => {
    const index = this.searchUnitMarker(unitName);
    this.markers[index].setLatLng(latLng);
    this.markers[index].setRotationAngle(angle);
  }

  run = async () => {
    const units = await this.getUnits();
    this.units = units;
    this.renderUnitsInSidebar(units);
    this.renderMap(units);
  }

}
/* Render inputs data */
/* const date = new Date();
const tomorrow = new Date(date.getFullYear(), date.getMonth(), (date.getDate() + 1));
var f1 = flatpickr(document.getElementById('basicFlatpickr'), {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  time_24hr: true,
  //defaultDate: {% if initial_datetime %}"{{ initial_datetime }}"{% else %}"today"{% endif %}
  });
var f2 = flatpickr(document.getElementById('basicFlatpickr2'), {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  time_24hr: true,
  //defaultDate: {% if final_datetime %}"{{ final_datetime }}"{% else %}tomorrow{% endif %}
  }); */

/* Render Map */
const renderMap = async (unitName, latitude, longitude, angle) => {
  document.getElementById("map-container").innerHTML = `<div id="map" style="height:700px;width:100%;"></div>`;
  $("#modal-map").modal("show");
  setTimeout(() => {
    const map = L.map('map', {
      center: [-12.1021887, -77.0665742],
      zoom: 16,
    });
    const openStreetMap = L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 19,
      }
    );
    const googleStreetsMap = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      attribution: '&copy; <a href="https://maps.google.com/">Google Maps</a>',
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    const googleHybridMap = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      attribution: '&copy; <a href="https://maps.google.com/">Google Maps</a>',
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    const baseLayers = {
      'Open Street Maps': openStreetMap,
      'Google Street Maps': googleStreetsMap,
      'Google Hybrid Maps': googleHybridMap
    };
    const overlays = {};
    L.control.layers(baseLayers, overlays).addTo(map);
    baseLayers['Google Street Maps'].addTo(map);

    const icon = L.divIcon({
      iconSize: null,
      html: `
        <div class="map-label">
          <div class="map-label-content">
            <img src="/static/assets/img/markers/cars.png" width="26" height="48"/>
          </div>
        </div>
        `
    });
    latitude = parseFloat(latitude.replace(',', '.'));
    longitude = parseFloat(longitude.replace(',', '.'));
    angle = parseInt(angle);
    const marker = new L.marker(
      [latitude, longitude],
      {
        icon: icon,
        title: unitName,
        rotationAngle: angle
      }
    ).bindTooltip(unitName, {
      permanent: true,
      direction: "top",
      offset: L.point({ x: 0, y: -30 })
    }).addTo(map);
    map.panTo([latitude, longitude]);
  }, 500);
}

/* Render Select */
$(".placeholder").select2({
  placeholder: "Buscar por Placa",
  allowClear: true
});
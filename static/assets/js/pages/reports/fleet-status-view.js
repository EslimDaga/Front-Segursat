const api = new Api();

class FleetStatusView {
  constructor() {
    this.map;
  }
  updateUnitStatus = (data) => {
    const unitId = data.unitid;
    document.getElementById(`unit${unitId}_last_report`).innerHTML = data.last_report;;
    document.getElementById(`unit${unitId}_last_state`).innerHTML = "ESTADO"
    document.getElementById(`unit${unitId}_last_latitude`).innerHTML = data.latitude;
    document.getElementById(`unit${unitId}_last_longitude`).innerHTML = data.longitude;
    document.getElementById(`unit${unitId}_last_speed`).innerHTML = `${data.speed} Km/h`;
    document.getElementById(`unit${unitId}_odometer`).innerHTML = `${data.odometer} Km`;
    document.getElementById(`unit${unitId}_last_address`).innerHTML = data.address;
  }
}

const renderMap = async (unitName, latitude, longitude, angle) => {
  document.getElementById("map-container").innerHTML = `<div id="map" style="height:700px;width:100%;"></div>`;
  $("#modal-map").modal("show");
  /* $("#dialog").dialog("open"); */
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

    //Funca
    L.easyPrint({
      title: 'My awesome print button',
      position: 'bottomright',
      sizeModes: ['A4Portrait', 'A4Landscape']
    }).addTo(map);
    //Funca

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

const htmlExtension = () => {
  $('#html5-extension').DataTable({
    dom: "<'ui grid'" +
      "<'row justify-content-between'" +
      "<'four wide column'l>" +
      "<'center aligned eight wide column'B>" +
      "<'right aligned four wide column'f>" +
      ">" +
      "<'dt-table'" +
      "<'sixteen wide column'tr>" +
      ">" +
      "<'row wide justify-content-between'" +
      "<'seven wide column'i>" +
      "<'right aligned nine wide column'p>" +
      ">" +
      ">",
    buttons: {
      buttons: [
        { extend: 'copy', text: '<i class="fas fa-copy"></i>', className: 'btn rounded-circle' },
        { extend: 'excel', text: '<i class="fas fa-file-excel"></i>', className: 'btn rounded-circle' },
        { extend: 'print', text: '<i class="fas fa-print"></i>', className: 'btn rounded-circle' }
      ]
    },
    "oLanguage": {
      "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
      "sInfo": "Mostrando página _PAGE_ de _PAGES_",
      "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
      "sSearchPlaceholder": "Buscar...",
      "sLengthMenu": "Resultados : <select class='form-control'><option value='10'>10</option><option value='15'>15</option><option value='50'>50</option><option value='100'>100</option><option value='1000'>1000</option></select>",
    },
    "stripeClasses": [],
    "pageLength": 15
  });
}

htmlExtension();
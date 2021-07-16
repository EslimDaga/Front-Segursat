class AlertView {
  constructor() {
    this.audio;
  }
  checkAlert = async (id) => {
    const url = `/web/api/alerts/get-alert/${id}`;
    const response = await fetch(url);
    const alert = await response.json();
    $("#checkAlert").modal("show");
    document.getElementById("map-container").innerHTML = `<div id="map" style="height:430px;width:100%;"></div>`;
    setTimeout(() => {
      const map = L.map('map', {
        center: [alert.latitude, alert.longitude],
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
      const marker = new L.marker(
        [alert.latitude, alert.longitude],
        {
          icon: icon,
          title: alert.unit_name,
          rotationAngle: alert.angle
        }
      ).bindTooltip(alert.unit_name, {
        permanent: true,
        direction: "top",
        offset: L.point({ x: 0, y: -30 })
      }).addTo(map);
      map.panTo([alert.latitude, alert.longitude]);
    }, 500);
    document.getElementById("unit_name").innerHTML = `${alert.unit_name}`;
    document.getElementById("description").innerHTML = `${alert.description}`;
    document.getElementById("speed").innerHTML = `${alert.speed} km/h`;
    document.getElementById("alert_description").innerHTML = `${alert.alert_description}`;
    if (alert.alert_priority === "V") {
      document.getElementById("alert_priority").innerHTML = `<span class="badge badge-danger"> Muy alta </span>`;
    } else if (alert.alert_priority === "H") {
      document.getElementById("alert_priority").innerHTML = `<span class="badge badge-warning"> Alta </span>`;
    } else if (alert.alert_priority === "M") {
      document.getElementById("alert_priority").innerHTML = `<span class="badge badge-info"> Media </span>`;
    } else {
      document.getElementById("alert_priority").innerHTML = `<span class="badge badge-success"> Baja </span>`;
    }
    document.getElementById("datetime").innerHTML = `${alert.datetime}`
    return alert;
  }

  addAlert = (alert) => {
    const table = document.getElementById("html5-extension").getElementsByTagName('tbody')[0];
    const row = table.insertRow(0);
    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    const cell3 = row.insertCell(3);
    const cell4 = row.insertCell(4);
    const cell5 = row.insertCell(5);
    const cell6 = row.insertCell(6);

    cell0.className = "text-center";
    cell1.className = "text-center";
    cell2.className = "text-center";
    cell3.className = "text-center";
    cell4.className = "text-center";
    cell5.className = "text-center";
    cell6.className = "text-center";

    cell0.innerHTML = alert.unit_name;
    cell1.innerHTML = alert.unit_description;
    cell2.innerHTML = alert.datetime;
    cell3.innerHTML = alert.alert_description;
    cell4.innerHTML = alert.address;

    if (alert.alert_priority === "V") {
      cell5.innerHTML = alert.alert_priority = `<span class="badge badge-danger"> Muy alta </span>`;
    } else if (alert.alert_priority === "H") {
      cell5.innerHTML = alert.alert_priority = `<span class="badge badge-warning"> Alta </span>`;
    } else if (alert.alert_priority === "M") {
      cell5.innerHTML = alert.alert_priority = `<span class="badge badge-info"> Media </span>`;
    } else {
      cell5.innerHTML = alert.alert_priority = `<span class="badge badge-success"> Baja </span>`;
    }
    cell6.innerHTML = `
      <div class="btn-group">
        <button type="button" onclick="alertView.checkAlert(${alert.alert_id})" class="btn btn-dark btn-sm"><i class="fas fa-eye"></i></button>
      </div>
      <div class="btn-group">
        <a onclick="myFunction();" class="btn btn-dark btn-sm"><i class="fas fa-trash-alt"></i></a>
      </div>
    `;
  }

  loadAudio = async (path) => {
    this.audio = new Audio('/static/sounds/medium.mp3');
  }

}
class AlertView {
  checkAlert = async (id) => {
    const url = `/web/api/alerts/get-alert/${id}`;
    const response = await fetch(url);
    const alert = await response.json()
    $("#checkAlert").modal("show");
    /* console.log(alert); */
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
      /* latitude = parseFloat(latitude.replace(',', '.'));
      longitude = parseFloat(longitude.replace(',', '.')); */
      const marker = new L.marker(
        [alert.latitude, alert.longitude],
        {
          icon: icon,
          title: alert.unit_name,
          rotationAngle: 0
        }
      ).bindTooltip(alert.unit_name, {
        permanent: true,
        direction: "top",
        offset: L.point({ x: 0, y: -30 })
      }).addTo(map);
      map.panTo([alert.latitude, alert.longitude]);
    }, 500);
    document.getElementById("unit_name").innerHTML = `${alert.unit_name}`;
    document.getElementById("speed").innerHTML = `${alert.speed} km/h`;
    document.getElementById("alert_type").innerHTML = `${alert.alert_type}`;
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
}
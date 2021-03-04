class Geofences {
  renderMap = () => {
    map = L.map('map', {
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
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    const drawControl = new L.Control.Draw({
      draw: {
        polyline: false,
        marker: false,
        circle: false,
        polygon: {
          allowIntersection: false,
          showArea: true
        }
      },
      edit: {
        featureGroup: drawnItems,
        poly: {
          allowIntersection: false
        }
      }
    });
    map.addControl(drawControl);
    map.on(L.Draw.Event.CREATED, function (event) {
      document.getElementById("id_geojson").value = "";
      drawnItems.addLayer(event.layer);
      geojson = JSON.stringify(drawnItems.toGeoJSON());
      document.getElementById("id_geojson").value = geojson;
    });
  }
}
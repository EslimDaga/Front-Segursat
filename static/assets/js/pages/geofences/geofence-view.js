const api = new Api()

class GeofenceView {

  constructor() {
    this.map;
    this.geojson;
  }
  
  renderMap = () => {
    this.map = L.map('map', {
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
    L.control.layers(baseLayers, overlays).addTo(this.map);
    baseLayers['Google Street Maps'].addTo(this.map);
    const drawnItems = new L.FeatureGroup();
    this.map.addLayer(drawnItems);
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
    this.map.addControl(drawControl);
    this.map.on(L.Draw.Event.CREATED, function (event) {
      document.getElementById("id_geojson").value = "";
      drawnItems.addLayer(event.layer);
      this.geojson = JSON.stringify(drawnItems.toGeoJSON());
      document.getElementById("id_geojson").value = this.geojson;
    });
  }

  renderGeofence  = async (id) => {
    const geofence = await api.getGeofence(id);
    document.getElementById("map_container2").innerHTML = `<div id="map2" style="height:100%;width:100%;"></div>`;
    document.getElementById("geofence_name").innerHTML = `${geofence.name}`
    $("#geofence_render_modal").modal("show");
    setTimeout(() => {
      const map2 = L.map('map2',{
        center: [-12.1021887,-77.0665742],
        zoom: 16,
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
      const overlays = {};
      L.control.layers(baseLayers,overlays).addTo(map2);
      baseLayers['Google Street Maps'].addTo(map2);

      const polygon = L.geoJSON(geofence.geojson).addTo(map2);
      map2.fitBounds(
        L.latLngBounds(
          L.latLng(
            polygon.getBounds()._northEast.lat,
            polygon.getBounds()._northEast.lng
          ),
          L.latLng(
            polygon.getBounds()._southWest.lat,
            polygon.getBounds()._southWest.lng
          )
        )
      );
    },500);
  }
}
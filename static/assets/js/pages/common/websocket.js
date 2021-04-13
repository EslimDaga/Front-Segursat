  const mapView = new MapView();
  mapView.run();
  let ws;
    const getWSURI = () => {
    let domain = window.location.hostname;
      let port = 8000;
      if (location.port == ""){
    port = 80;
      }
      wsURI = `ws://${domain}:${port}/ws/locations/{{ user.profile.account }}/`;
      return wsURI;
    }
    // websocket
    const connect = () => {
    wsURI = getWSURI();
      ws = new WebSocket(wsURI);
      ws.onopen = function() {
    console.log('Socket is connected!');
      };
      ws.onmessage = function(e) {
    newLocation = JSON.parse(e.data).message;
        /* console.log(newLocation); */
        mapView.updateMarkerPosition(
          newLocation['unit_name'],
          [
            newLocation['latitude'],
            newLocation['longitude']
          ],
          newLocation['angle']
        );
      };
      ws.onclose = function(e) {
    console.log('Socket is closed. Reconnect will be attempted in 5 second.', e.reason);
      };
      ws.onerror = function(err) {
    console.error('Socket encountered error: ', err.message, 'Closing socket');
        ws.close();
      };
    }
    connect();
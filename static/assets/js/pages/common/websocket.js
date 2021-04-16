class MyWebsocket{

  constructor(account) {
    this.ws;
    this.account = account
  }
  getWSURI = () => {
    const domain = window.location.hostname;
    let port = 8000;
    if (location.port == ""){
      port = 80;
    }
    const wsURI = `ws://${domain}:${port}/ws/locations/${this.account}/`;
    return wsURI;
  }
  // websocket
  run = () => {
    const wsURI = this.getWSURI();
    this.ws = new WebSocket(wsURI);
    this.ws.onopen = function() {
      console.log('Socket is connected!');
    };
    this.ws.onmessage = function(e) {
      console.log("Mensaje, mensajeee");
    };
    this.ws.onclose = function(e) {
      console.log('Socket is closed. Reconnect will be attempted in 5 second.', e.reason);
      setTimeout(function() {
        this.run();
      }, 5000);
    };
    this.ws.onerror = function(err) {
      console.error('Socket encountered error: ', err.message, 'Closing socket');
      this.ws.close();
    };
  }

}
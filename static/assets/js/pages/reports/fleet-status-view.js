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
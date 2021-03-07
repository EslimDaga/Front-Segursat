class AlertView {
  checkAlert = async (id) => {
    const url = `/web/api/alerts/get-alert/${id}`;
    const response = await fetch(url);
    const alert = await response.json()
    $("#checkAlert").modal("show");
    /* console.log(alert); */
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
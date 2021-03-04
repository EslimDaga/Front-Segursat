class Drivers {
  getDriver = async (id) => {
    const url = `/web/api/drivers/get-driver/${id}/`;
    const response = await fetch(url);
    const driver = await response.json();
    return driver;
  }

  renderDriverInformation = async (unitName) => {
    const unit = await getUnit(unitName);
    document.getElementById("tittleUnitName").innerHTML = `${unit.name}`;
    document.getElementById("uniqueId").value = `${unit.device.uniqueid}`;
    document.getElementById("imeiUnit").value = `${unit.device.imei}`;
    document.getElementById("sim_phonenumber").value = `${unit.device.sim_phonenumber}`;
    document.getElementById("sim_iccid").value = `${unit.device.sim_iccid}`;
    document.getElementById("nameUnit").value = `${unit.name}`;
    $("#driver_update_modal").modal("show");
  }
}

class Api {
  // listar unidades
  getUnits = async () => {
    const url = `/web/api/units/get-units/`
    const response = await fetch(url);
    const units = await response.json();
    return units;
  }
  // listar unidad
  getUnit = async (name) => {
    const url = `/web/api/units/get-unit/${name}/`;
    const response = await fetch(url);
    const unit = await response.json();
    return unit;
  }
  // listar historial de ubicaciones
  getLocationHistory = async (unitName,initialDate,finalDate) => {
    const url = `/web/api/locations/get-location-history/${unitName}/${initialDate}/${finalDate}/`
    const response = await fetch(url);
    const locationHistory = await response.json();
    return locationHistory;
  }
  // listar conductor
  getDriver = async (id) => {
    const url = `/web/api/drivers/get-driver/${id}/`;
    const response = await fetch(url);
    const driver = await response.json();
    return driver;
  }
  // listar geocerca
  getGeofence = async (id) => {
    const url = `/web/api/geofences/get-geofence/${id}/`;
    const response = await fetch(url);
    const geofence = await response.json();
    return geofence;
  }
  // listar geocercas
  getGeofences = async (id) => {
    const url = '/web/api/geofences/get-geofences/';
    const response = await fetch(url);
    const geofence = await response.json();
    return geofence;
  }
}
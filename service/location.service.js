const { defaultPoints } = require("../constants");
const {
  findAllLocation,
  addLocation,
  deleteLocation,
} = require("../database/provider/location.provider");
const { deleteAllRoute } = require("../database/provider/route.provider");
const { distanceService, getRouteService } = require("./route.service");

const getLocationService = async () => {
  const data = await findAllLocation();
  return { features: data };
};

const addLocationService = async () => {
  const data = await findAllLocation();
  if (data.length === 0) {
    await addLocation(defaultPoints);
  }
  return;
};

const addCustomLocationService = async (customLocation) => {
  await addLocation(customLocation);
  await distanceService()

  ///Re-generate routes
  const data=await getRouteService()

  return data;
};

const deleteCustomLocationService = async () => {
  //delete custom location
  await deleteLocation();
  //delete all route
  await deleteAllRoute();
  //restore default route
 const routeData= await distanceService()

  return routeData;
};

module.exports = {
  getLocationService,
  addLocationService,
  addCustomLocationService,
  deleteCustomLocationService,
};

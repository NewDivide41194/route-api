const { defaultPoints } = require("../constants");
const {
  findAllLocation,
  addLocation,
} = require("../database/provider/location.provider");
const { deleteAllRoute } = require("../database/provider/route.provider");

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

const addCustomLocationService = async (data) => {
  await addLocation(data);
  return;
};

module.exports = {
  getLocationService,
  addLocationService,
  addCustomLocationService,
};

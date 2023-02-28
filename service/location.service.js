const { defaultPoints } = require("../constants");
const db = require("../database/model");

const locationModel = db.location;
const getLocationService = async () => {
  const data = await locationModel.findAll();

  return { features: data };
};

const addLocation = async () => {
  const data = await locationModel.findAll();
  if (data.length === 0) {
    await locationModel.bulkCreate(defaultPoints);
  }
  return;
};

module.exports = { getLocationService, addLocation };

const { defaultPoints } = require("../constants");
const db = require("../database/model");

const locationModel = db.location;
const getLocationService = async () => {
  const data = await locationModel.findAll();

  return { features: data };
};

const addLocation = async () => {
 await locationModel.bulkCreate(defaultPoints);

};

module.exports = { getLocationService,addLocation };

const db = require("../model");
const locationModel = db.location;

const findAllLocation = async () => {
  return await locationModel.findAll();
};

const addLocation = async (data) => {
  return await locationModel.bulkCreate(data);
};

const deleteLocation = async () => {
  return await locationModel.destroy({ where: { type: "manual" } });
};

module.exports = { findAllLocation, addLocation, deleteLocation };

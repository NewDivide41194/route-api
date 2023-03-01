const db = require("../model");
const locationModel = db.location;

const findAllLocation = async () => {
  return await locationModel.findAll();
};

const addLocation=async(data)=>{
    return await locationModel.bulkCreate(data)
}

module.exports = { findAllLocation,addLocation };
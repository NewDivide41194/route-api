const db = require("../model");
const routeModel = db.route;

const findAllRoute = async () => {
  return await routeModel.findAll();
};

const addRoute = async (data) => {
  return await routeModel.bulkCreate(data);
};

const deleteAllRoute = async () => {
  return await routeModel.destroy({
    where: {},
    truncate: true,
  });
};

module.exports = { findAllRoute, addRoute, deleteAllRoute };

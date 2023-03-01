const locationController = require("../controller/location.controller");
const routeController = require("../controller/route.controller");

module.exports = (app) => {
  app.route("/getLocation").get(locationController.getLocation);
  app.route("/getRoute").get(routeController.getRoute);
  app.route("/addCustomLocation").post(locationController.addCustomLocation);
};

const express=require("express")

const locationController = require("../controller/location.controller");
const routeController = require("../controller/route.controller");

const router=express.Router()
  router.route("/getLocation").get(locationController.getLocation);
  router.route("/getRoute").get(routeController.getRoute);
  router.route("/addCustomLocation").post(locationController.addCustomLocation);
  router.route("/deleteCustomLocation").delete(locationController.deleteCustomLocation);

module.exports = {
  appRouter: (app) => app.use("", router),
};
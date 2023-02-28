const express = require("express");
const db = require("./database/model");
require("dotenv").config();

const routes = require("./routes");
const { distanceService } = require("./service/route.service");
const { addLocation } = require("./service/location.service");

const app=express()

routes(app);

db.sequelize.sync()

const Port = process.env.SERVER_PORT || 3001;
addLocation()
distanceService()

app.listen(Port, () => {
  console.info("App is listening on the port " + Port);
});

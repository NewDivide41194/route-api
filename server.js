const express = require("express");
const db = require("./database/model");
require("dotenv").config();

const routes = require("./routes");
const { distanceService } = require("./service/route.service");
const { addLocationService } = require("./service/location.service");


const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// app.use(cors());

routes(app);

db.sequelize.sync();

const Port = process.env.SERVER_PORT || 3001;
addLocationService();
distanceService();

app.listen(Port, () => {
  console.info("App is listening on the port " + Port);
});

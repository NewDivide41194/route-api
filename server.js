const express = require("express");
const db = require("./database/model");
const cors=require("cors")
const bp=require("body-parser")
require("dotenv").config();

const { distanceService } = require("./service/route.service");
const { addLocationService } = require("./service/location.service");
const { allowedOrigin } = require("./config/cors.config");
const { appRouter } = require("./routes");

const corsConfig = {
  origin: allowedOrigin
};
db.sequelize.sync();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsConfig))
appRouter(app);

addLocationService();
distanceService();
const Port = process.env.SERVER_PORT || 3001;


app.listen(Port, () => {
  console.info("App is listening on the port " + Port);
});

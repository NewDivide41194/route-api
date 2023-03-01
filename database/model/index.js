const Sequelize = require("sequelize");
const locationModel = require("./location.model");
require("dotenv").config();

const db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);
const location = require("./location.model");
const route = require("./route.model");

db.location = location(sequelize, Sequelize);
db.route = route(sequelize, Sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;

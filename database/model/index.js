const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";

const config = require("../../config/config")[env];

const db = {};
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
const location = require("./location.model");
const route = require("./route.model");

db.location = location(sequelize, Sequelize);
db.route = route(sequelize, Sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;

const { defaultPoints } = require("../../constants");

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('locations',defaultPoints(Sequelize));
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('locations', null, {});
    }
  };
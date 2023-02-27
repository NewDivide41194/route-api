const { distanceService } = require("../../service/distance.service");

module.exports = {
    
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('routes',distanceService());
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('routes', null, {});
    }
  };
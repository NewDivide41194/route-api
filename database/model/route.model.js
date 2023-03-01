module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("routes", {
    type: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    geometry: {
      type: Sequelize.GEOMETRY("LINESTRING"),
      // allowNull: false,
    },
  });
  return Location;
};

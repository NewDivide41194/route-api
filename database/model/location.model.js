module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("locations", {
    geometry: {
      type: Sequelize.GEOMETRY("POINT"),
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Location;
};

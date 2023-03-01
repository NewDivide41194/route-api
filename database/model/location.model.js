module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("locations", {
    geometry: {
      type: Sequelize.GEOMETRY("POINT"),
      allowNull: false,
    },
  });
  return Location;
};

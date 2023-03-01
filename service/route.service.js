const db = require("../database/model");
const { findAllLocation } = require("../database/provider/location.provider");
const {
  findAllRoute,
  addRoute,
  deleteAllRoute,
} = require("../database/provider/route.provider");
const { getRoute } = require("../helper/getRoute");

const routeModel = db.route;

const getRouteService = async () => {
  const data = await findAllRoute();
  return data;
};
const distanceService = async () => {
  await deleteAllRoute();
  const locationData = await findAllLocation();
  getRoute(locationData)
    .then(async (data) => {
      const routeData = data
        .filter((element) => {
          return element !== undefined;
        })
        .map((v, k) => {
          if (v) {
            for (var i = 0; i < data.length; i++) {
              if (v[i] !== 0) {
                return {
                  type: "Feature",
                  geometry: { type: "LineString", coordinates: v[i] },
                };
              }
            }
          }
        });
      await addRoute(routeData);
    })
    .catch((err) => {
      console.log(err);
    });

  return;
};

module.exports = { distanceService, getRouteService };

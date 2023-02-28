const db = require("../database/model");
const { getRoute } = require("../helper/getRoute");

const routeModel = db.route;
const locationModel = db.location;

const getRouteService = async () => {
  const data = await routeModel.findAll();
  return data;
};
const distanceService = async () => {
  const route = await routeModel.findAll();
  if (route.length === 0) {
    const data = await locationModel.findAll();

    getRoute(data)
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
        await routeModel.bulkCreate(routeData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return;
};
module.exports = { distanceService, getRouteService };

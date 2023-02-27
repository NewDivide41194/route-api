const db = require("../database/model");
const { getRoute } = require("../helper/getRoute");

const routeModel = db.route;
const locationModel = db.location;

const getRouteService = async () => {
  const data = await routeModel.findAll();
  return data;
};
const distanceService = async () => {
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
                return { type:"Feature",geometry: { type: "LineString", coordinates: v[i] } };
              }
            }
          }
        });
      console.log("--------------->", routeData.map(v=>v.geometry.coordinates));
      await routeModel.bulkCreate(routeData);
      // return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { distanceService, getRouteService };

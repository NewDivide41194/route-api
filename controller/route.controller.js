const { getRouteService } = require("../service/route.service");

const getRoute = async (req, res, next) => {
  try {
    const result = await getRouteService();
    res.status(200).send(result)
  } catch (error) {
    next(error);
  }
};

module.exports = { getRoute };

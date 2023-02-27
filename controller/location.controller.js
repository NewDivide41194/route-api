const { getLocationService } = require("../service/location.service");

const getLocation = async (req, res, next) => {
  try {
    const result = await getLocationService();
    res.status(200).send(result)
  } catch (error) {
    next(error);
  }
};

module.exports = { getLocation };

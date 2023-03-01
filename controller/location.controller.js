const { getLocationService,addCustomLocationService } = require("../service/location.service");

const getLocation = async (req, res, next) => {
  try {
    const result = await getLocationService();
    res.status(200).send(result)
  } catch (error) {
    next(error);
  }
};

const addCustomLocation = async (req, res, next) => {
  const {customLocation}=req.body
  console.log(customLocation);
  try {
    const result = await addCustomLocationService(customLocation);
    res.status(200).send(result)
  } catch (error) {
    next(error);
  }
};

module.exports = { getLocation,addCustomLocation };

const {
  getLocationService,
  addCustomLocationService,
  deleteCustomLocationService,
} = require("../service/location.service");

const getLocation = async (req, res, next) => {
  try {
    const result = await getLocationService();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const addCustomLocation = async (req, res, next) => {
  const { customLocation } = req.body;
  try {
    const result = await addCustomLocationService(customLocation);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const deleteCustomLocation = async (req, res, next) => {
  try {
    await deleteCustomLocationService();

    res.status(204).send(JSON.stringify({message:"Custom Location Removed!"}));
  } catch (error) {
    next(error);
  }
};

module.exports = { getLocation, addCustomLocation, deleteCustomLocation };

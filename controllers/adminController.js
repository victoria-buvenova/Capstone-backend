const DBServices = require("../services/adminService");

const getAllClients = async (req, res) => {
  let data = await DBServices.dbGetAllClients(req, res);
  console.log(data);
  res.send(data);
};

const getAllUsers = async (req, res) => {
  let data = await DBServices.dbGetAllUsers(req, res);
  console.log(data);
  res.send(data);
};

const addUser = async (req, res) => {
  let data = await DBServices.dbAddUser(req, res);
  console.log("add user", data);
  res.send("Successfully registered");
};

const addMyTime = async (req, res) => {
  let data = await DBServices.dbAddMyTime(req, res);
  console.log(data);
  res.send("Successfully added time");
};

const updateDate = async (req, res) => {
  let data = await DBServices.dbUpdateDateById(req, res);
  console.log(data);
  res.send("Successfully updated date");
};

const updateSugaringPrice = async (req, res) => {
  let data = await DBServices.dbUpdateSugaringPrice(req, res);
  console.log(data);
  res.send("Successfully updated price");
};

const updateMakeupPrice = async (req, res) => {
  let data = await DBServices.dbUpdateMakeupPrice(req, res);
  console.log(data);
  res.send("Successfully updated price");
};

const updateNailsPrice = async (req, res) => {
  let data = await DBServices.dbUpdateNailsPrice(req, res);
  console.log(data);
  res.send("Successfully updated price");
};

const deleteById = async (req, res) => {
  let data = await DBServices.dbDeleteById(req, res);
  console.log(data);
  res.send("Successfully deleted");
};

module.exports = {
  getAllClients,
  getAllUsers,
  addUser,
  addMyTime,
  updateSugaringPrice,
  updateMakeupPrice,
  updateNailsPrice,
  updateDate,
  deleteById,
};

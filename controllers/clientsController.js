const DBServices = require("../services/clientsService");

const bookTime = async (req, res) => {
  console.log("book time controller here");
  let data = await DBServices.dbBookTime(req, res);
  console.log(data);
  res.send("Successfully booked");
};

const getMyBookings = async (req, res) => {
  console.log("book time controller here");
  let data = await DBServices.dbGetMyBookings(req, res);
  console.log(data);
  res.send("Successfully booked");
};

const getSugaringServices = async (req, res) => {
  console.log("controller here");
  let data = await DBServices.dbGetSugaringServices(req, res);
  console.log(data);
  res.send(data);
};

const getMakeupServices = async (req, res) => {
  console.log("controller here");
  let data = await DBServices.dbGetMakeupServices(req, res);
  console.log(data);
  res.send(data);
};

const getNailsServices = async (req, res) => {
  console.log("controller here");
  let data = await DBServices.dbGetNailsServices(req, res);
  console.log(data);
  res.send(data);
};

module.exports = {
  bookTime,
  getSugaringServices,
  getMakeupServices,
  getNailsServices,
  getMyBookings,
};

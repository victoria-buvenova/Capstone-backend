const DBServices = require("../services/adminService");

const getAllClients = async (req, res) => {
  let data = await DBServices.dbGetAllClients(req, res);
  console.log(data);
  res.send(data);
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

// const updateTime = async (req,res)=>{
//     let data = await DBServices.dbUpdateTimeById(req,res)
//     console.log(data)
//     res.send('Successfully updated time')
// }

const deleteById = async (req, res) => {
  let data = await DBServices.dbDeleteById(req, res);
  console.log(data);
  res.send("Successfully deleted");
};

module.exports = {
  getAllClients,
  addMyTime,
  // updateTime,
  updateDate,
  deleteById,
};

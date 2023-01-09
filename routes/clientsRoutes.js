const express = require("express");
const router = express.Router();

const clientsController = require("../controllers/clientsController"); //grabs the controller

// this is for clients to book time for editing the name and contacts columns
router.put("/book", (req, res) => {
  clientsController.bookTime(req, res);
});

router.get("/mybookings", (req, res) => {
  clientsController.getMyBookings(req, res);
});

router.get("/sugaring", (req, res) => {
  console.log("router here");
  clientsController.getSugaringServices(req, res);
});

router.get("/makeup", (req, res) => {
  clientsController.getMakeupServices(req, res);
});

router.get("/nails", (req, res) => {
  clientsController.getNailsServices(req, res);
});

module.exports = router;

const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clientsController')    //grabs the controller



// this is for clients to book time for editing the name and contacts columns
router.put('/book',(req,res)=>{
    console.log("router here")
    clientsController.bookTime(req,res)
})

module.exports = router;
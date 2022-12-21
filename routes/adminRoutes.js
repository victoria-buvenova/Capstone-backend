const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController') 

router.get('/getall' ,(req,res)=>{
    adminController.getAllClients(req,res)
});

// this is for the admin to add time
router.post('/add' ,(req,res)=>{
    adminController.addMyTime(req,res)
});


router.put('/updatedate',(req,res)=>{
    adminController.updateDate(req,res)
})

router.put('/updatetime',(req,res)=>{
    adminController.updateTime(req,res)
})

router.delete('/deletebyid',(req,res)=>{
    adminController.deleteById(req,res)
})

module.exports = router;
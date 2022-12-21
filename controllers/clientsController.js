const DBServices = require('../services/clientsService');




const bookTime = async (req,res)=>{
    console.log("controller here")
    let data = await DBServices.dbBookTime(req, res)
    console.log(data)
    res.send('Successfully booked')

}

module.exports = {
    bookTime
}
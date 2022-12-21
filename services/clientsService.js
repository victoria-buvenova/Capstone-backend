const sql = require("../index");


let dbBookTime = async (req, res)=>{
  console.log("db services here");
  console.log(req.query);
  let name = req.query.name;
  let contacts = req.query.contacts
  let id = req.query.id
  
  return new Promise((resolve, reject) => {
   let sqlQuery  = `UPDATE Timetable.Timeslots SET Name = "${name}", Contacts = "${contacts}" WHERE id = "${id}"`;
      sql.query(sqlQuery, (err, result, field) => {
          if(err) return reject(err);
          resolve(Object.values(((result))));
      });
  });   
}

module.exports = { 
  dbBookTime
}
const sql = require("../index");



let dbGetAllClients = async (res)=>{
  console.log("db services here")

  return new Promise((resolve, reject) => {
      let sqlQuery = `SELECT * FROM Timeslots`;
      
      sql.query(sqlQuery, (err, result, field) => {
          if(err) return reject(err);
          resolve(Object.values(((result))));
      });
  });    
}


let dbAddMyTime = async (req, res)=>{
  console.log("db services here");
  console.log(req.query);

  let date = req.body.date;
  let time= req.body.time;
  
  return new Promise((resolve, reject) => {
      let sqlQuery = `INSERT INTO Timetable.Timeslots (Date, Time) VALUES ('${date}', '${time}')`;
      
      sql.query(sqlQuery, (err, result, field) => {
          if(err) return reject(err);
          resolve(Object.values(((result))));
      });
  });   
}

let dbUpdateDateById = async (req, res)=>{
  console.log("db services here");
  console.log(req.query);
  let date = req.query.date;
  let id = req.query.id
  return new Promise((resolve, reject) => {
   let sqlQuery  = `UPDATE Timetable.Timeslots SET Date = '${date}' WHERE id = '${id}'`;
      sql.query(sqlQuery, (err, result, field) => {
          if(err) return reject(err);
          resolve(Object.values(((result))));
      });
  });   
}

let dbUpdateTimeById = async (req, res)=>{
  console.log("db services here");
  console.log(req.query);
  let time = req.query.time;
  let id = req.query.id
  return new Promise((resolve, reject) => {
   let sqlQuery  = `UPDATE Timetable.Timeslots SET Time = "${time}" WHERE id = "${id}"`;
      sql.query(sqlQuery, (err, result, field) => {
          if(err) return reject(err);
          resolve(Object.values(((result))));
      });
  });   
}

let dbDeleteById = async (req, res)=>{
  console.log("db services here");
  console.log(req.query);
  let id = req.query.id;
  return new Promise((resolve, reject) => {
      let sqlQuery = `DELETE FROM Timetable.Timeslots WHERE id = "${id}"`;
      
      sql.query(sqlQuery, (err, result, field) => {
          if(err) return reject(err);
          resolve(Object.values(((result))));
      });
  });   
}

module.exports = { 
  dbGetAllClients,
  dbAddMyTime,
  dbUpdateDateById,
  dbUpdateTimeById,
  dbDeleteById
}
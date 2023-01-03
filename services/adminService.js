const sql = require("../index");

let dbGetAllClients = async (res) => {
  console.log("db services here");

  return new Promise((resolve, reject) => {
    let sqlQuery = `SELECT * FROM Timeslots`;

    sql.query(sqlQuery, (err, result, field) => {
      if (err) return reject(err);
      resolve(Object.values(result));
    });
  });
};

let dbGetAllUsers = async (res) => {
  console.log("db services here");

  return new Promise((resolve, reject) => {
    let sqlQuery = `SELECT * FROM allUsers`;

    sql.query(sqlQuery, (err, result, field) => {
      if (err) return reject(err);
      resolve(Object.values(result));
    });
  });
};

let dbAddUser = async (req, res) => {
  console.log("db add user here");
  console.log(req.query);

  let email = req.query.email;
  let password = req.query.password;

  return new Promise((resolve, reject) => {
    let sqlQuery = `INSERT INTO Timetable.allUsers (email, password) VALUES ('${email}', '${password}')`;

    sql.query(sqlQuery, (err, result, field) => {
      if (err) return reject(err);
      resolve(Object.values(result));
    });
  });
};

let dbAddMyTime = async (req, res) => {
  console.log("db add my time here");
  console.log(req.query);

  let date = req.query.Date;
  let time = req.query.Time;

  return new Promise((resolve, reject) => {
    let sqlQuery = `INSERT INTO Timetable.Timeslots (Date, Time) VALUES ('${date}', '${time}')`;

    sql.query(sqlQuery, (err, result, field) => {
      if (err) return reject(err);
      resolve(Object.values(result));
    });
  });
};

let dbUpdateDateById = async (req, res) => {
  console.log("db services here");
  console.log(req.query);
  // let date = req.query.date;
  //let time = req.query.time;
  let id = req.query.id;
  let time = req.query.Time ? req.query.Time : "no input";
  let date = req.query.Date ? req.query.Date : "no input";
  return new Promise((resolve, reject) => {
    if (time !== "no input" && date !== "no input") {
      let sqlQuery = `UPDATE Timetable.Timeslots SET Date = '${date}', Time = '${time}' WHERE id = '${id}'`;
      sql.query(sqlQuery, (err, result, field) => {
        if (err) return reject(err);
        resolve(Object.values(result));
      });
    } else if (time === "no input") {
      let sqlQuery = `UPDATE Timetable.Timeslots SET Date = '${date}' WHERE id = '${id}'`;
      sql.query(sqlQuery, (err, result, field) => {
        if (err) return reject(err);
        resolve(Object.values(result));
      });
    } else if (date === "no input") {
      let sqlQuery = `UPDATE Timetable.Timeslots SET Time = '${time}' WHERE id = '${id}'`;
      sql.query(sqlQuery, (err, result, field) => {
        if (err) return reject(err);
        resolve(Object.values(result));
      });
    }
  });
};

// let dbUpdateTimeById = async (req, res)=>{
//   console.log("db services here");
//   console.log(req.query);
//   let time = req.query.time;
//   let id = req.query.id
//   return new Promise((resolve, reject) => {
//    let sqlQuery  = `UPDATE Timetable.Timeslots SET Time = "${time}" WHERE id = "${id}"`;
//       sql.query(sqlQuery, (err, result, field) => {
//           if(err) return reject(err);
//           resolve(Object.values(((result))));
//       });
//   });
// }

let dbDeleteById = async (req, res) => {
  console.log("db services here");
  console.log(req.query);
  let id = req.query.id;
  return new Promise((resolve, reject) => {
    let sqlQuery = `DELETE FROM Timetable.Timeslots WHERE id = "${id}"`;

    sql.query(sqlQuery, (err, result, field) => {
      if (err) return reject(err);
      resolve(Object.values(result));
    });
  });
};

module.exports = {
  dbGetAllClients,
  dbGetAllUsers,
  dbAddUser,
  dbAddMyTime,
  dbUpdateDateById,
  // dbUpdateTimeById,
  dbDeleteById,
};

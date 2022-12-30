const sql = require("../index");

let dbBookTime = async (req, res) => {
  console.log("db services here");
  console.log(req.query);
  let name = req.query.Name;
  let contacts = req.query.Contacts;
  let id = req.query.id;

  return new Promise((resolve, reject) => {
    let sqlQuery = `UPDATE Timetable.Timeslots SET Name = "${name}", Contacts = "${contacts}" WHERE id = "${id}"`;
    sql.query(sqlQuery, (err, result, field) => {
      if (err) return reject(err);
      resolve(Object.values(result));
    });
  });
};

let dbGetSugaringServices = async (res) => {
  console.log("db services here");

  return new Promise((resolve, reject) => {
    let sqlQuery = `SELECT * FROM Sugaring`;

    sql.query(sqlQuery, (err, result, field) => {
      if (err) return reject(err);
      resolve(Object.values(result));
    });
  });
};

let dbGetMakeupServices = async (res) => {
  console.log("db services here");

  return new Promise((resolve, reject) => {
    let sqlQuery = `SELECT * FROM Makeup`;

    sql.query(sqlQuery, (err, result, field) => {
      if (err) return reject(err);
      resolve(Object.values(result));
    });
  });
};

let dbGetNailsServices = async (res) => {
  console.log("db services here");

  return new Promise((resolve, reject) => {
    let sqlQuery = `SELECT * FROM Nails`;

    sql.query(sqlQuery, (err, result, field) => {
      if (err) return reject(err);
      resolve(Object.values(result));
    });
  });
};

module.exports = {
  dbBookTime,
  dbGetSugaringServices,
  dbGetMakeupServices,
  dbGetNailsServices,
};

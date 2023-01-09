const express = require("express");
const app = express();
// const swaggerUi = require('swagger-ui-express');
// swaggerDocument = require('./swagger.json');
// app.use(
// '/api-docs-admin',
// swaggerUi.serve,
// swaggerUi.setup(swaggerDocument)
// );
const mysql = require("mysql");
const dbConfig = require("./config/db.config.js");

const port = 8080;

let cors = require("cors");
app.use(cors());
app.use(express.json());

const connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

module.exports = connection;
const adminRoute = require("./routes/adminRoutes");
app.use("/admin", adminRoute);

const clientRoute = require("./routes/clientsRoutes");
app.use("/clients", clientRoute);

app.listen(port, () => {
  console.log(`Example applistening at http://localhost:${port}`);
});

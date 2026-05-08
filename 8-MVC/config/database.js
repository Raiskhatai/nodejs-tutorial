// config - data base connection file .

const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "15302486",
  database: "nodesql_prec",
});

module.exports = db;

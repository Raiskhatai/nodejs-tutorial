const connection = require("mysql2/promise");

const db = connection.createPool({
  host: "localhost",
  user: "root",
  password: "15302486",
  database: "shortener",
});

module.exports = db;

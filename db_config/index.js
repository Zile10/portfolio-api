// Importing mysql & dotenv package
const mysql = require('mysql');
require('dotenv').config()

// Setting up database connection using enviroment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user:  process.env.DB_USER,
  password:  process.env.DB_PASS,
  database:  process.env.DB_NAME,
  multipleStatements: true
})
// Exporting connection to database
module.exports = connection;
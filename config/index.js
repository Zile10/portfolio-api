// Imports: (MySQL & dotenv)
const mysql = require('mysql');
require('dotenv').config();

// Setting Up Database Connection Using Environment Variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user:  process.env.DB_USER,
  password:  process.env.DB_PASS,
  database:  process.env.DB_NAME,
  multipleStatements: true
})

// Exporting Connection to Database
module.exports = connection;
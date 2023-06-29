const path = require('path');
let express = require('express');
let app = express();
require('dotenv').config();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME
});

let port = process.env.PORT || 6969;

app.get("/", (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM projects', function (error, results, fields) {
        res.status(200);
        res.send(results);
        // if (error) throw error;
    
    });
    connection.end();
    // res.status(200);
    // res.sendFile(path.join(__dirname, '/views/index.html'));
});

// app.use("/")

app.listen(
    port, 
    () => {
        console.log('\x1b[33mListening for calls on port:', "\x1b[31m" + port, "\x1b[33m");
        console.log(`http://localhost:${port}`);
        console.log("Press Ctrl+C to exit server", "\x1b[0m");
    }
);
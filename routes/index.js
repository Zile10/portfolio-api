let express = require('express');
let router = express.Router();
let connection = require('../db_config')

app.get("/", (req, res) => {
    connection.query('SELECT * FROM projects', function (error, results, fields) {
        res.status(200);
        res.send(results);
        if (error) throw error;
    }); 
});


module.exports = router;
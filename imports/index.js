// Commonly Used Imports
module.exports = {
    path: require('path'),
    express: require('express'),
    app: require('express')(),
    bodyParser: require('body-parser'),
    mysql: require('mysql'),
    dotenv: require('dotenv'),
    connection: require('../config')
}
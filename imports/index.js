module.exports = {
    path: require('path'),
    ls: require('ls'),
    express: require('express'),
    app: require('express')(),
    bodyParser: require('bodyParser'),
    dotenv: require('dotenv'),
    connection: require('../db_config')
}
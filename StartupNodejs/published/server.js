'use strict';
//var http = require('http');
var bodyParser = require("body-parser");
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.port || 3000;

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Serve Static Files
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'public')));

//Router Middleware
app.use('/', require('./data/userService/userDataService'));

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

app.get('/*', function (req, res) {
    res.sendFile(path.resolve('layout.html'));
});

app.get('/*', function (req, res) {
    res.render('error');
});

var server = app.listen(port, function () {
    console.log('Node server is running on port..' + port);
});


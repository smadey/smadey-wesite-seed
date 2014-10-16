var path = require('path');

var express = require('express');
var favicon = require('serve-favicon');

var config = require('./config');

var app = express();

app.set('port', config.port);

app.use(express.static(path.join(__dirname, 'app')));
app.use(favicon(path.join(__dirname, 'favicon.ico')));

module.exports = app;

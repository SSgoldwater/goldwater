var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');
var cors = require('./cors.js');
var routes = require('./routes.js');

var backend = express();

backend.use(bodyParser.urlencoded({ extended: true }));
backend.use(bodyParser.json());
backend.use(cors);
routes(backend);

backend.listen(config.port);

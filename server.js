// Imports
var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;

// Instanciate server
var server = express();

// Body parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Configure routes
server.get('/', function(req, res) {
    res.setHeader('Content6Type', 'text/html');
    res.status(200).send('<h1>Vous êtes sur mon server</h1>');
});

server.use('/api/', apiRouter);

// Launch server
server.listen(3001, function() {
    console.log("Server is running on port : 3001");
});
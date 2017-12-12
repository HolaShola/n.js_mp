'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
const mongoose = require('mongoose');
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  mongoose.connect('mongodb://localhost/node_mp', {
    useMongoClient: true,
    keepAlive: 300000,
    connectTimeoutMS: 30000
  }, function(err) {
    if (err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(1);
    }});

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});

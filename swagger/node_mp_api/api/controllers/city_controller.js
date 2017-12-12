'use strict';

var util = require('util');
var request = require('request');

module.exports = {
  getAllCities: getAllCities
}

function getAllCities(req, res) {
  res.json({"cities": "ok"});
};

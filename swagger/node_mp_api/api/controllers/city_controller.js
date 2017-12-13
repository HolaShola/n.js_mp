'use strict';

var util = require('util');
var request = require('request');
var City = require('../models/city-model');

module.exports = {
  getAllCities: getAllCities,
  postCity: postCity,
  getCityById: getCityById,
  updateCity: updateCity,
  removeCity: removeCity
}

function getAllCities(req, res) {
  // res.json({"cities": "ok"});
  City.find({}, function (err, cities) {
    // if (err) res.status(500).send(err);
    // res.status(200).send(products);
    if (err) {
      throw err;
    } else {
      res.json(cities);
    }
  });
};

function postCity(req, res) {
  let newCity = City(req.swagger.params.city.value);

  newCity.save(function (err) {
      if (err) {
          throw err
      } else {
          res.json({message: 'OK'});
      }
  });
};

function getCityById(req, res) {
  let cityId = req.swagger.params.cityId.value;
  City.find({_id: cityId}, function (err, city) {
      if (err) {
          throw err;
      } else if (!city) {
          res.status(404).json({message: 'City not found'})
      } else {
        res.json(city);
      }
  });
}

function updateCity(req, res) {
  let cityId = req.swagger.params.id.value;
  let newCity = req.swagger.params.city.value;

  City.findByIdAndUpdate(cityId, newCity, function (err, city) {
      if (err) {
          throw err;
      } else {
          res.json({message: 'OK'});
      }
  });
}

function removeCity(req, res) {
  let cityId = req.swagger.params.cityId.value;

  City.remove({_id: cityId}, function (err) {
      if (err) {
          throw err;
      } else {
          res.json({message: 'OK'});
      }
  });
}
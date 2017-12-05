const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const City = require('../models/cityShema');
const cities = require('../data/mock_cities');
const city_for_post = require('../data/mock_city_for_post');

router
  .route('/cities')
  .get((req, res) => {
    City.find((err, cities) => {
      if (err) res.status(500).send(err);
      res.status(200).send(cities);
    });
  })
  .post((req, res) => {
    City.collection.insert(city_for_post, (err, cities) => {
      if (err) res.status(500).send(err);
      res.status(200).send(cities);
    });
  });

router
  .route('/cities/:id')
  .get((req, res) => {
    City.find({_id: req.params.id}, (err, city) => {
      if (err) res.status(500).send(err);
      res.status(200).send(city);
    });
  })
  .delete((req, res) => {
    City.remove({_id: req.params.id}, (err, city) => {
      if (err) res.status(500).send(err);
      res.status(200).send(city);  
    });
  })  
  .put((req, res) => {
    City.findById({_id: req.params.id}, (err, city) => {
      if(city) {
        city.name = req.body.name || city.name;
        city.save(function(err) {
          if (err) res.status(500).send(err);
          res.status(200).send(city);
        });
      } else {
        name = req.body.name;
        capital = req.body.capital || false;
        country = req.body.country || 'Belarus';
        save(function(err, city) {
          if (err) res.status(500).send(err);
          res.status(200).send(city);  
        })
      }
    })
  });

module.exports = router;
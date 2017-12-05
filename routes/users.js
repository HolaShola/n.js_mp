const express = require('express');
const router = express.Router();

const User = require('../models/userShema');
const mock_users = require('../data/mock_users');

router
  .route('/users')
  .get((req, res) => {
    User.find((err, users) => {
      if (err) res.status(500).send(err);
      res.status(200).send(users);
    });
  });

router
  .route('/users/:id')
  .get((req, res) => {
    User.find({id: req.params.id}, (err, user) => {
      if (err) res.status(500).send(err);
      res.status(200).send(user);
    });
  })
  .delete((req, res) => {
    // Product.findByIdAndRemove(req.params.id, (err, product) => {
    //   if (err) res.status(500).send(err);
    //   res.status(200).send(product);  
    // });
    User.remove({id: req.params.id}, (err, user) => {
      if (err) res.status(500).send(err);
      res.status(200).send(user);  
    });
  })
  
module.exports = router;

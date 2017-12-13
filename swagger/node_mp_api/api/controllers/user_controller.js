'use strict';

var util = require('util');
var request = require('request');
const User = require('../models/user-model');

module.exports = {
  getAllUsers: getAllUsers,
  postUser: postUser,
  getUserById: getUserById,
  removeUser: removeUser
}

function getAllUsers(req, res) {
  User.find({}, function (err, users) {
    //if (err) res.status(500).send(err);
    // res.status(200).send(users);
    //res.json(users)
    if (err) {
      throw err;
    } else {
      res.json(users);
    }
  });
};

function postUser(req, res) {
  let newUser = User(req.swagger.params.user.value);

  newUser.save(function (err) {
      if (err) {
          throw err
      } else {
          res.json({message: 'OK'});
      }
  });
};

function getUserById(req, res) {
  let userId = req.swagger.params.userId.value;
  User.find({id: userId}, function (err, user) {
      if (err) {
          throw err;
      } else if (!user) {
          res.status(404).json({message: 'User not found'})
      } else {
        res.json(user);
      }
  });
}

function removeUser(req, res) {
  let userId = req.swagger.params.userId.value;

  User.remove({id: userId}, function (err) {
      if (err) {
          throw err;
      } else {
          res.json({message: 'OK'});
      }
  });
}
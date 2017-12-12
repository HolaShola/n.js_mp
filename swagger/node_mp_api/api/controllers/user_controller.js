'use strict';

var util = require('util');
var request = require('request');
const User = require('../../../../models/userShema');

module.exports = {
  getAllUsers: getAllUsers
}

// function getAllUsers(req, res) {
//   res.json({"users": "ok"});
// };

function getAllUsers(req, res) {
  User.find((err, users) => {
    if (err) res.status(500).send(err);
    // res.status(200).send(users);
    res.json(users)
  });
};
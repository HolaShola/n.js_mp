'use strict';

var util = require('util');
var request = require('request');
const Product = require('../../../../models/productShema');

module.exports = {
  findAllProducts: findAllProducts
}

// function findAllProducts(req, res) {
//   res.json({"products": "ok"});
// };

function findAllProducts(req, res) {
  Product.find((err, products) => {
    if (err) res.status(500).send(err);
    res.status(200).send(products);
  });
};
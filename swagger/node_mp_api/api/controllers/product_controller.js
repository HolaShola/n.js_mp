'use strict';

var util = require('util');
var request = require('request');
const Product = require('../models/product-model');

module.exports = {
  findAllProducts: findAllProducts,
  postProduct: postProduct,
  getProductById: getProductById,
  updateProduct: updateProduct,
  removeProduct: removeProduct
}

function findAllProducts(req, res) {
  Product.find({}, function (err, products) {
    // if (err) res.status(500).send(err);
    // res.status(200).send(products);
    if (err) {
      throw err;
    } else {
      res.json(products);
    }
  });
}

function postProduct(req, res) {
  let newProduct = Product(req.swagger.params.product.value);

  newProduct.save(function (err) {
      if (err) {
          throw err
      } else {
          res.json({message: 'OK'});
      }
  });
};

function getProductById(req, res) {
  let productId = req.swagger.params.productId.value;
  Product.find({id: productId}, function (err, product) {
      if (err) {
          throw err;
      } else if (!product) {
          res.status(404).json({message: 'Product not found'})
      } else {
        res.json(product);
      }
  });
}

function updateProduct(req, res) {
  var productId = req.swagger.params.id.value;
  var newProduct = req.swagger.params.product.value;

  Product.findByIdAndUpdate(productId, newProduct, function (err, book) {
      if (err) {
          throw err;
      } else {
          res.json({message: 'OK'});
      }
  });
}

function removeProduct(req, res) {
  var productId = req.swagger.params.productId.value;

  Product.remove({id: productId}, function (err) {
      if (err) {
          throw err;
      } else {
          res.json({message: 'OK'});
      }
  });
}
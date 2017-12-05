const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/productShema');
const products = require('../data/mock_products');
const product_for_post = require('../data/mock_product_for_post');

router
  .route('/products')
  .get((req, res) => {
    Product.find((err, products) => {
      if (err) res.status(500).send(err);
      res.status(200).send(products);
    });
  })
  .post((req, res) => {
    Product.collection.insert(product_for_post, ((err, products) => {
      if (err) res.status(500).send(err);
      res.status(200).send(products);
    }));
    // For post query
    // let product = new Product(req.body);
    // product.save((err, createdProduct) => {
    //   if (err) res.status(500).send(err);
    //   res.status(200).send(createdProduct);  
    // });
  });

router
  .route('/products/:id')
  .get((req, res) => {
    Product.find({id: req.params.id}, (err, product) => {
      if (err) res.status(500).send(err);
      res.status(200).send(product);
    });
  })

module.exports = router;
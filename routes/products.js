const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/productShema');
const products = require('../data/mock_products');

router
    .route('/products')
    .get((req, res) => {
        Product.find((err, products) => {
            if (err) res.send(err);
            res.json(products);
        });
    })
    // .post((req, res) => {
    //     Product.collection.insert(productsCollection, ((err, products) => {
    //         productsCollection.forEach(product => {
    //             product.lastModifiedDate = 'create_at ' +  Date.now();
    //         });
    //         if (err) res.send(err);
    //         res.json(products);
    //     }));
    // });

router
    .route('/products/:id')
    .get((req, res) => {
        Product.findById({_id: req.params.id}, (err, user) => {
            if (err) res.send(err);
            res.json(user);
        });
    })

module.exports = router;

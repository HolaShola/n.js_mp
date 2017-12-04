let mongoose = require('mongoose');

const Product = require('../models/productShema'); 
let arrayOfProducts = require('../data/mock_products');
const http = require('http');

mongoose.Promise = global.Promise;

const server = http.createServer((request, response) => {  
  let promise = mongoose.connect('mongodb://localhost:27017/node_mp', {
    useMongoClient: true,
  });

  promise
    .then(function(db) {
      Product.collection.insert(arrayOfProducts, (err, arrayOfProducts) => {
        if (err) return console.error(err);
        console.log(arrayOfProducts);
      })
    })
    .catch((err) => {
      console.error(err);
    })

  mongoose.disconnect();     
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end('fh');
})
  
server.listen(8080);
console.log("server is listening on 8080");
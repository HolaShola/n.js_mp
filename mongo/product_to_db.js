let mongoose = require('mongoose');
//let Product = require('../models/product_mongoose'); 
//let product = require('./product_mock');
const http = require('http');


let productSchema = mongoose.Schema({
    id: Number,
    name: String,
    brand: String,
    company: String, 
    price: Number,
    isbn: String,
  })

let Product = mongoose.model('Product', productSchema);  

let firstProduct = new Product({
    id: 1,
    name: 'Ibuprofen',
    brand: 'Ibuprofen',
    company: 'SUPERVALU INC.', 
    price: 49.33,
    isbn: '088373265-3',  
  });
  
const server = http.createServer((request, response) => {  
    let promise = mongoose.connect('mongodb://localhost:27017/node_mp', {
      useMongoClient: true,
    });
  
    promise
      .then(function(db) {
          console.log('---', db.Products)
        firstProduct.save(function(err, firstProduct) {
          if (err) return console.error(err);
          console.log(firstProduct); 
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
     
// let promise = mongoose.connect('mongodb://localhost:27017/node_mp', {
//   useMongoClient: true,
// });

// promise
//   .then(function(db) {  
//     firstProduct.save(function(err, firstProduct) {
//       if (err) return console.error(err);
//       console.log(firstProduct); 
//     })
//   })
//   .catch((err) => {
//     console.error(err);
//   })

// mongoose.disconnect();     

let mongoose = require('mongoose');

const User = require('../models/userShema'); 
let arrayOfUsers = require('../data/mock_users');
const http = require('http');

mongoose.Promise = global.Promise;

const server = http.createServer((request, response) => {  
  let promise = mongoose.connect('mongodb://localhost:27017/node_mp', {
    useMongoClient: true,
  });

  promise
    .then(function(db) {
      User.collection.insert(arrayOfUsers, (err, arrayOfUsers) => {
        if (err) return console.error(err);
        console.log(arrayOfUsers);
      })
    })
    .catch((err) => {
      console.error(err);
    })

  mongoose.disconnect();     
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end('users in the db');
})
  
server.listen(8080);
console.log("server is listening on 8080");
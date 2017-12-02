var random = require('mongoose-simple-random');
let mongoose = require('mongoose');
const http = require('http');

let citySchema = mongoose.Schema({
  name: String,
  country: String,
  capital: Boolean,
  location: {
    lat: Number,
    long: Number
  }  
})

citySchema.plugin(random);

let City = mongoose.model('City', citySchema);

const server = http.createServer((request, response) => {  
  let promise = mongoose.connect('mongodb://localhost:27017/node_mp', {
    useMongoClient: true,
  });

  promise
    .then(function(db) {
      // Find a single random document 
      City.findOneRandom(function(err, result) {
        if (err) return console.error(err);
        console.log(result);
      });
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
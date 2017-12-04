let mongoose = require('mongoose');
const http = require('http');

const City = requore('../models/cityShema');

let vitebsk = new City({
  name: 'Vitebsk',
  country: 'Belarus',
  capital: false,
  location: {
    lat: 45.321233,
    long: 65.094532  
  }  
})

const server = http.createServer((request, response) => {
  mongoose.connect('mongodb://localhost:27017/node_mp');
  
  let db = mongoose.connection;
    
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    City.find(function (err, cities) {
      if (err) return console.error(err);
      console.log(cities);
    })
  });
       
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end('fh');
 })

 server.listen(8080);
 console.log("server is listening on 8080");
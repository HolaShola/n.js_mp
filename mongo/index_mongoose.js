let mongoose = require('mongoose');

let citySchema = mongoose.Schema({
  name: String,
  country: String,
  capital: Boolean,
  location: Object,  
})

let City = mongoose.model('City', citySchema);

let vitebsk = new City({
  name: 'Vitebsk',
  country: 'Belarus',
  capital: false,
  location: {
    lat: 45.321233,
    long: 65.094532  
  }  
})

const http = require('http');

const server = http.createServer((request, response) => {
  mongoose.connect('mongodb://localhost:27017/node_mp');
  let db = mongoose.connection;
    
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
  
        

    });
        

     response.writeHead(200, {"Content-Type": "text/html"});
     response.end('fh');
 })

 server.listen(8080);
 console.log("server is listening");
var MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/node_mp';

// db.cities.aggregate({ $sample: { size: 2 } })

const http = require('http');

const server = http.createServer((request, response) => {
    MongoClient.connect(url, (err, db) => {
      let collection = db.collection('cities');
        if (err) return;
        
        collection
   //       .find({name: 'Gomel'})
          .aggregate({ $sample: { size: 1 } })
          .toArray(function(err, docs) {
            console.log(docs[0])
            db.close()
          })
    })

     response.writeHead(200, {"Content-Type": "text/html"});
     response.end('fh');
 })

 server.listen(8080);
 console.log("server is listening");
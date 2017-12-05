const express = require('express');
const mongoose = require('mongoose');

const products = require('./routes/products');
const users = require('./routes/users');
const cities = require('./routes/cities');

const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();

mongoose.connect('mongodb://localhost/node_mp', {
    useMongoClient: true,
    keepAlive: 300000,
    connectTimeoutMS: 30000
}, function(err) {
    if (err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(1);
    }});
mongoose.Promise = global.Promise;

router.get('/', (req, res) => {
  res.json({ message: 'welcome to api!' });
});

app.use('/api', router);
app.use('/api', products);
app.use('/api', users);
app.use('/api', cities);

app.listen(port, () => console.log(`App listening on port ${port}!`)) 

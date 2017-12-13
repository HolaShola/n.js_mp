let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let citySchema = new Schema({
    name: String,
    country: String,
    capital: String,
    location: {
        lat: Number,
        long: Number,
    }
})

let City = mongoose.model('City', citySchema); 

module.exports = City;

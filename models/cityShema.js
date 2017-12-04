let mongoose = require('mongoose');

let citySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    country: {
        type: String,
        required: true,
        maxlength: 100
    },
    capital: {
        type: String,
        required: true,
        maxlength: 100
    },
    location: {
        lat: Number,
        long: Number,
    }
})

let City = mongoose.model('City', citySchema); 

module.exports = City;

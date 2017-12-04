let mongoose = require('mongoose');

let productSchema = mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    brand: {
        type: String,
        required: true,
        maxlength: 100
    },
    company: {
        type: String,
        required: true,
        maxlength: 100
    },
    price: {
        type: Number,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        maxlength: 100
    },
})

let Product = mongoose.model('Product', productSchema); 
module.exports = Product;
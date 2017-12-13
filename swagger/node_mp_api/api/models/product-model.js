let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
    id: Number,
    name: String,
    brand: String,
    company: String,
    price: String,
    isbn: String
})

let Product = mongoose.model('Product', productSchema);

module.exports = Product;
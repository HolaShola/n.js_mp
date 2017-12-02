let mongoose = require('mongoose');

let productSchema = mongoose.Schema({
  id: Number,
  name: String,
  brand: String,
  company: String, 
  price: Number,
  isbn: String,
})

let Product = mongoose.model('Product', productSchema);

// export default Product; 
module.exports = Product;
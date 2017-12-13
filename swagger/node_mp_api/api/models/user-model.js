let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    id: Number,
    username: String,
    email: String
})

let User = mongoose.model('User', userSchema); 

module.exports = User;

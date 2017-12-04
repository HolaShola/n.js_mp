let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    id: Number,
    username: {
        type: String,
        required: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        maxlength: 100
    }
})

let User = mongoose.model('User', userSchema); 

module.exports = User;

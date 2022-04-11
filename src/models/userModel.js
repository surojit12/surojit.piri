const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    edition: String,
    category: String
}, {timestamps: true});
   

module.exports = mongoose.model('User', bookSchema) //users



// String, Number
// Boolean, Object/json, array
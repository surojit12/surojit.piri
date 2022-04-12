const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
        bookName : {type:String,required:true}, 
        authorName: String, 
        tags: [String],
        totalPages:Number,
        isstockAvailable: Boolean,
        prices: {
            indianPrice: String,
            europePrice: String
        },
        year: {type: Date, default: 2021}

    }, 
    { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "newAuthor1"
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref:"newPublisher1"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });
module.exports = mongoose.model('newBook1', bookSchema)

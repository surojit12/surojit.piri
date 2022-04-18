const mongoose = require('mongoose');

const publisherschema=new mongoose.Schema( {
    name: String,
    headQuarter:String
}, { timestamps: true });

module.exports = mongoose.model('newPublisher1', publisherschema)



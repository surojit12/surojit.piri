const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    // Write the schema content
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users

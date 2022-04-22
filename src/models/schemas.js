const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
	lastName: String,
	mobile: String,
	emailId: String,
	password: String,
 	gender: {type: String, enum: ['male', 'female', 'others']},
	isDeleted: {type: Boolean, default: false},
	age: Number
}, { timestamps: true })

const user = mongoose.model('AuthUser', userSchema) 

module.exports = {user}


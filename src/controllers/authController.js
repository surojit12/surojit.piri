const {user} = require("../models/schemas")
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    let data = req.body
    if(!await user.exists(data)){
    let savedData = await user.create(data)
    res.send({msg: savedData})
    }
    else res.send({msg: "This User already exists."})
}

const loginUser = async (req, res) => {
    let data = req.body
    let userData = await user.findOne({emailId:data.emailId, password: data.password})
    if(userData){
    let token = jwt.sign({userId: userData._id.toString(), 
                            firstName: user.firstName,
                            age: user.age}, "Which came first, The Egg or the Chicken ??!")
    res.setHeader("x-Auth-Token", token)
    res.send({msg: token})
    }
    else res.send({status: false, msg: "This User credentials don't exist in our DB."})
}

const fetchUser = async (req, res) => {
    let userDetails = await user.findById(req.params.userId)
    if(!userDetails) return res.send({msg: "User doesn't exist in DB."})
    if(!userDetails.isDeleted) return res.send({status: true, data: userDetails})
    res.send({msg: "You can't access this user data as it's deleted."})
}

const updateDetails = async (req,res) => {
    let userDetails = await user.findById(req.params.userId)
    if(!userDetails) return res.send({msg: "User doesn't exist in DB."})
    let updatedUser = await user.findOneAndUpdate({ _id: req.params.userId}, req.body, {new: true});
    res.send({update: true, data: updatedUser})
}

const deleteUserData = async (req,res) => {
    let userDetails = await user.findById(req.params.userId)
    if(!userDetails) return res.send({msg: "User doesn't exist in DB."})
    let updatedUser = await user.findOneAndUpdate({ _id: req.params.userId}, {isDeleted: false}, {new: true});
    res.send({update: true, data: updatedUser})
}

module.exports = {createUser, loginUser, fetchUser, updateDetails, deleteUserData}

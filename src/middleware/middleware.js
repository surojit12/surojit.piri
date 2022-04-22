const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');

const authCheck = async (req, res, next) => {
    try{
    let id = req.params.userId
    if(!mongoose.isValidObjectId(req.params.userId)) return res.send({msg: "Invalid UserId sent in Params"})
    let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']
    if(!token) return res.send({msg: 'Token is required to verify log in credentials. Please send it.'}) 
    let tokenValidity = jwt.verify(token, "Which came first, The Egg or the Chicken ??!")
    if(tokenValidity.userId !== id) return res.send({msg: "This user hasn't been Authorised"}) 
    next()
    }
    catch {
        res.status(400).send({status: false, msg: 'invalid token, unable to verify session. Please re-log in.'}) 
    }
}

module.exports = {authCheck}
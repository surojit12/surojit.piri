const { count } = require("console")
const PublisherModel= require("../models/newPublisher")

createPublisher=async function(req,res){

    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})

}

module.exports.createPublisher=createPublisher;
const authorModel = require("../models/newAuthor")
const PublisherModel=require("../models/newPublisher")
const bookModel= require("../models/newBook")
const ObjectId = require('mongoose').Types.ObjectId;
const mongodb=require("mongodb")


 const createBook= async function (req, res) {

        let newbook=req.body;
        
        if(!newbook.author){
            return res.send({Error:"Please enter Athor ID"})
        }
        if(!newbook.publisher){
            return res.send({Error:"Please enter Publisher ID"})
        }
       
       let auth= await authorModel.find();
          let validAuth=auth.find(value=>{
              return value._id==newbook.author
          })
        
          if(!validAuth){
            return res.send({Error:"Please enter Valid Athor ID"})
          }  
    
          let publis=await PublisherModel.find();
          let validPublis=publis.find(value=>{
            return value._id==newbook.publisher
        })
      
        if(!validPublis){
          return res.send({Error:"Please enter Valid Publisher ID"})
        }  
             
    
      let bookData=await bookModel.create(newbook)
       res.send({data: bookData})
    }
    
        


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}


const getBooksWithDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author')
    res.send({data: specificBook})

}

const updBook=async function (req,res){

let books=await bookModel.updateMany(

{publisher:"625bf774357ec1fa5c51b8d5"},
{$set:{isHardCover:true}},
{new:true,upsert:true}
)
 books1=await bookModel.updateMany(

{publisher:"625bf7e5357ec1fa5c51b8db"},
{$set:{isHardCover:true}},
{new:true,upsert:true}
)
//res.send({msg:allBooks})
let myBook=await bookModel.find().populate("publisher")
 res.send({msg:myBook})
}

const updateByAuthor=async function(req,res){


let b=await bookModel.updateMany(

{ratings:{gt:50}},
{$set:{price:price+10}}
)
let books=await bookModel.find({rating:{gt:3.5}})
res.send(books)

}

module.exports.createBook= createBook
//module.exports.getBooksData= getBooksData
module.exports.getBooksWithDetails = getBooksWithDetails
module.exports.updBook=updBook;
module.exports.updateByAuthor=updateByAuthor;
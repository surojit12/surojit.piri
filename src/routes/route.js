const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")
const AuthorModel=require("../models/newAuthor")
const BookModel=require("../models/newBook")
const PublisherModel=require("../models/newPublisher")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher",publisherController.createPublisher)
router.post('/createBook',bookController.createBook)
router.get("/getBook",bookController.getBooksWithDetails)
router.put("/updateBook",bookController.updBook)
router.get("/upbyauth",bookController.updateByAuthor)

//router.get("/getAuthorsData", authorController.getAuthorsData)

//router.post("/createBook", bookController.createBook  )

//router.get("/getBooksData", bookController.getBooksData)

//router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;
const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const bookController= require("../controllers/bookController")


// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

module.exports = router;
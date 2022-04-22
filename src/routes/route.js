const express = require('express');
const router = express.Router();
const controller = require("../controllers/authController")
const {authCheck} = require("../middleware/middleware")

//Developer-Batch route handlers
router.post("/users", controller.createUser)
router.post("/login", controller.loginUser)
router.get("/users/:userId", authCheck ,controller.fetchUser)
router.put("/users/:userId",authCheck, controller.updateDetails)
router.delete("/users/:userId",authCheck, controller.deleteUserData)

module.exports = router;




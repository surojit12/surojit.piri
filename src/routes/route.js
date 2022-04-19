const express = require("express");
const Controller = require("../controllers/Controller");
const router = express.Router();

router.get("/routerRequest", Controller.status);

module.exports = router;
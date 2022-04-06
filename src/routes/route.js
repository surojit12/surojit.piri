const express = require('express');
const res = require('express/lib/response');
const logger =require('../logger/logger')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log("My Name is Surojit")no
    // console.log('The endpoint value is', logger.url)
    logger.logger()
    res.send('My first ever api!')
});
router.get('/test-me2', function(req, res){
  res.send('My Second ever api')
});
module.exports = router;
// adding this comment for no reason
const express = require('express');
const Middleware = require("../src/middlewares/middleWare");

var bodyParser = require("body-parser");

const route = require('./routes/route.js');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(Middleware.logData)


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

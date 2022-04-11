const express = require('express');
const loggerModule = require('../logger/logger')
const helperModule = require('../util/helper')
const formatterModule = require('../validator/formatter')
const lodash = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    loggerModule.welcomeMessage()
    helperModule.printTodaysDate()
    helperModule.printCurrentMonth()
    helperModule.printBatchInformation()
    formatterModule.trimString()
    formatterModule.changeCaseToUpper()
    formatterModule.changeCaseToLower()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
// Problem a)
let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let subArrays = lodash.chunk(months, 3)
console.log('The result after splitting the months array is ', subArrays)

// Problem b)

let oddNumbers = [1,3,5,7,9,11,13,15,17,19]
console.log('The last 9 odd numbers in the array are: ', lodash.tail(oddNumbers))

// Problem c)
let a = [1 , 2, 1, 4]
let b = [2, 3, 4, 3]
let c = [6, 1, 5, 10]
let d = [1, 1, 1]
let e = [1, 2, 3, 4, 5]

console.log('Final array or unique numbers is : ', lodash.union(a, b, c, d, e))

// Problem d)
let arrayOfKeyValuePairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
console.log('The object created from arrays is :', lodash.fromPairs(arrayOfKeyValuePairs))
    res.send('My hello api!')
});




module.exports = router;
// adding this comment for no reason
// to send data in  post request-> prefer sending in BODY -> click body-raw-json
router.post('/test-post2', function (req, res) {
    let data= req.body
    console.log(data)
    res.send( {  msg: "hi guys..my 2nd post req"  }   )
});


let Name=[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
               "soccer"
           ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    }
]

router.post('/players',function(req,res){
 let i=0;
 let myName=req.body;
for(i;i<Name.length;i++)
{

    if(myName.name==Name[i].name)
    {
        res.send( {r:"player already exist"} );
        break;
    }
    
}   
console.log(i)
console.log(Name.length)
if(i==Name.length)
{
Name.push(req.body);
res.send( { data: Name , status: true })
}
//res.send(  { data: Name , status: true }  );
});
//const randomController= require("../controllers/randomController.js")
//write a post request to accept an element in post request body and add it to the given array and return the new array
//router.post('/test-post3', randomController.addToArray ); //HANDLER/CONTROLLER



module.exports = router;

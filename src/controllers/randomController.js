let addToArray= function (req, res) {
    let x= req.body.number
    console.log(x)
    let arr= [2, 5, 11, 14]
    arr.push(x)
    res.send( {  msg: "post req 3", data: arr  } )
}

module.exports.addToArray= addToArray
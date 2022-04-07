let trim = function(){
 console.log('The result after trimming the string is :' + ' functionUp batch  '.trim() + '.')
}

let changetoLowerCase = function() {
    console.log('The result after using toLowerCase function is :', 'SAbIHa'.toLowerCase())
}

let changeToUpperCase = function() {
    console.log('The result after using toUpperCase function is ', 'uraNium'.toUpperCase())    
}

module.exports.trimString = trim
module.exports.changeCaseToLower = changetoLowerCase
module.exports.changeCaseToUpper = changeToUpperCase

let printDate = function() {
    let currentDate = new Date()
    console.log('The current date is : ',currentDate)
}

let printMonth = function() {
    let currentDate = new Date()
    console.log('The current months is : ', currentDate.getMonth() + 1)
}

let getBatchInfo = function() {
    console.log('Uranium, W2D4, the topic for today is Nodejs module system assignment discussion')
}

module.exports.printTodaysDate = printDate
module.exports.printCurrentMonth = printMonth
module.exports.printBatchInformation = getBatchInfo

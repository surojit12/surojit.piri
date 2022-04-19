const logData = function(req, res, next) {
    let timeStamp = new Date();
    let date = timeStamp.getFullYear() + '-' + (timeStamp.getMonth() + 1) + '-' +
       timeStamp.getDate() + ' ' + timeStamp.getHours() + ':' + timeStamp.getMinutes() + ':' + timeStamp.getSeconds();

    const result = date + "," + req.ip + "," + req.path;
    console.log(result);
    next();   
};
module.exports.logData = logData;
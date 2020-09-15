var = 'http://mylogger.io/log'; //Hypethetical

function log(message) {
  //Send an HTTP request
  console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url; // you can express your endpoint like this.

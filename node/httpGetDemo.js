const http = require('http');

module.exports = function(){

var options = {
  host: 'httpstat.us',
  port: 80,
  path: '/418'
};

http.get(options, function(res){
  console.log('Got Response: ' + res.statusCode);
}).on('error', function(e){
  console.log('Got error: ' + res.statusCode);
});
}

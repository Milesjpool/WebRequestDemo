const http = require('http');
module.exports = function(){return server}

var server = http.createServer(handleRequest);
server.type = 'http'

function handleRequest(req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world');
}

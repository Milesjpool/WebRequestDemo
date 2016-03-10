const http = require('http');

const port = 1337;

console.log("Starting Server...")

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Everyone!\n');
}).listen(port, function() {
  console.log('Server running at http://localhost:' + port + '/');
});

const http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
}

module.exports = {
  startServer: function (port) {
    console.log("Starting Server...")
    server.listen(port, function() {
      console.log('Server running at http://localhost:' + port + '/');
    })
  }
};

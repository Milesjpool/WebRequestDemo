var demoServer = require('./httpDemo')
//var demoServer = require('./expressDemo')

const port = 1337

var demo = demoServer();

demo.listen(port, function() {
    console.log('Running ' + demo.type + ' server on port ' + port);
})


var demoRequest = require('./httpGetDemo.js')

demoRequest()

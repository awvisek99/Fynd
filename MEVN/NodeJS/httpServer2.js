var http = require('http');
var dt = require('./httpServer');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html'});

    res.write("Test Completed");

    res.end();
}).listen(7001);
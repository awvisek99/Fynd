var http = require('http');
var dt = require('./httpServer2');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html'});

    res.write("Abhishek <><><>");

    res.end();
}).listen(7000);
var http = require('http');
var express = require('express');

function test(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello');
    response.end();
}

var app = express();
app.createServer(test).listen(8000);

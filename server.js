var http = require("http");
var port = process.env.port || 1337;

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
});

server.listen(port, 'localhost');

'use strict';
var http = require('http');
var port = 1337;
 
http.createServer( function (req, res){
		var body = "<h1>hai dunia, ini server node js pertama ku</h1>"
		res.writeHead(200, {'Content-type': 'text/html'});
		res.write(body);
		res.end();
	}).listen(port);
console.log("server ini berjalan pada port "+port);

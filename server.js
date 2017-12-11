var http=require('http');
 
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Hello Node.js');
}).listen(212,'localhost');
 
console.log('Application running on http://localhost:212');

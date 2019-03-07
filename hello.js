var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Hello World. Welcome to Node.Js / Heroku\n');
}).listen(process.env.PORT || 8081);

console.log('Server Started');
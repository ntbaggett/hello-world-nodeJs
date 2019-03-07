const http = require('http');

const server = http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Hello World. Welcome to Node.Js / Heroku\n');
}).listen(8080);

console.log('Server Started');
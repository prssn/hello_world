var http = require('http');
var port = 4000;

http.createServer(function (request, response) {
	response.writeHead(200);
	response.end('Hello World!');
}).listen(port);

console.log('Server started @ ' + port);
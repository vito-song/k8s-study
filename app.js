const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var requestCount = 0;

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  requestCount++;
  response.writeHead(200);
  response.end("This is K8s study. You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);


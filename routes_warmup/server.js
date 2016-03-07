var http = require('http');

var requestHandler = function(req, res) {
  console.log('req: ', req.url);
}

var server = http.createServer(requestHandler);

server.listen(1337, function(){
  console.log("server lissnin")
})
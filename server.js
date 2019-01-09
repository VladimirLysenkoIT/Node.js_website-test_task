var http = require("http");
var url = require("url");
var fs = require('fs');
var router = require("./router");
var directory = "static";
function start() {
  http.createServer(function (request, response){
    var pathname = url.parse(request.url).pathname;
    console.log(`Request for "${pathname}" received.`);
    if(!fs.existsSync(directory + pathname)){
      console.log(`not found`);
      response.writeHead(404);
      response.end();
      return;
    }

    router.route(pathname, directory);
    response.writeHead(200, {"Content-Type": router.contentType});
  fs.createReadStream(router.adress).pipe(response);
  }).listen(8888);
  console.log("Server has started.");
}

start();
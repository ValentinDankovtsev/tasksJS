var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});


function accept(req, res) {

 file.serve(req,res);
      
//  res.writeHead(200, {
//   'Content-Type': 'application/json;charset=utf-8',
//   'Cache-Control': 'no-cache'
// });
// res.end("OK");
}




if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}
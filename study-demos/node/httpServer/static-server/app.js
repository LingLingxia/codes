const mime = require("./mime").types;
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
http.createServer(function(request, response) {
      var pathname = url.parse(request.url).pathname;
      var realPath = "static" + pathname;
      fs.stat(realPath,(err,stat)=>{
          if (err || !stat.isFile()) {
              response.writeHead(404, {'Content-Type': 'text/plain'});
              response.write("This request URL " + pathname + " was not found on this server.");
              response.end();
          } else {
            var ext = path.extname(realPath);
            ext = ext ? ext.slice(1) : 'unknown';
            var contentType = mime[ext] || "text/plain";
            response.writeHead(200, {'Content-Type': contentType});
           var stream =  fs.createReadStream(realPath);
           stream.pipe(response);
          }
      })
  }).listen('3000',()=>{
    console.log('server start')
  });


  
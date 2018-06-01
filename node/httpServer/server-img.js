const http=require('http');
const fs=require('fs');

http.createServer((res,req)=>{
    var writeS=fs.createReadStream('1.jpg');
    req.writeHead(200,{'Content-type':'image/jpg'});
    writeS.pipe(req);
}).listen(80);
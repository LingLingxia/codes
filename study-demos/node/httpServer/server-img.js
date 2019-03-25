const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    var writeS=fs.createReadStream('1.jpg');
    res.writeHead(200,{'Content-type':'image/jpg'});
    writeS.pipe(res);
}).listen(80);
const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    res.write('<h1>hello world</h1>');
    res.end();
}).listen(80);
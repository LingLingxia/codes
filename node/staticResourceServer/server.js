const http=require('http');
const fs=require('http');
const url=require('url');
var sourceMap={
    '.js':'application/javascript',
    '.css':'text/css',
    '.html':'text/html',
    'jpg':'img/jpg',
    'jepg':'img/ipg',
    'gif':'img/gif',
    'png':'img/png',
}
http.createServer((req,res)=>{
    let requestURL=url.parse(req.url);
    
});
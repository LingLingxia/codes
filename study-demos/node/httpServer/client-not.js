const http =require('http');
const queryString=require('querystring');
var client=http.request({
    host:'127.0.0.1',
    port:'80',
    method:'delete',
    path:'/1.js?name=llx&age=23',
},(res)=>{
    let data='';
    
    console.log(res.statusCode,res.statusMessage);
    res.on('data',(chunk)=>{
        data+=chunk;
    });
    res.on('end',()=>{

        console.log(JSON.parse(data));
    });
});

client.end();
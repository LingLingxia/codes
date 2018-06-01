const http =require('http');
const queryString=require('querystring');
var client=http.request({
    host:'127.0.0.1',
    port:'80',
    method:'get',
    path:'/?name=llx&age=23',
    headers:{
        'my-own':'yes'//可以自定义字段
    }
},(res)=>{
    let data='';
    res.on('data',(chunk)=>{
        data+=chunk;
    });
    res.on('end',()=>{

       console.log( data );
    });
});

client.end();
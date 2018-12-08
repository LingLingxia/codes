const http=require('http');
const queryString=require('querystring');

var clientJ=http.request({
    host:'127.0.0.1',
    port:80,
    method:'post',
    headers:{
        'content-Type':'application/json'
    }
},(res)=>{
    var data='';
    res.on('data',(chunk)=>{
        data+=chunk;
    });
    res.on('end',()=>{
        let e=JSON.parse(data);
        console.log(e);
    });
});

var postData={
    'school':'hunan normal university',
    'birthday':'1995-08-02'
}
//clientJ.write(JSON.stringify(postData));
clientJ.end(JSON.stringify(postData));
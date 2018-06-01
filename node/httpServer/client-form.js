const http =require('http');
const queryString=require('querystring');
var client=http.request({
    host:'127.0.0.1',
    port:'80',
    method:'post',
    headers: {
        'content-Type':'application/x-www-form-urlencoded'
    }
},(res)=>{
    res.setEncoding('utf8');
    let data='';
    res.on('data',(chunk)=>{
        data+=chunk;
    });
    res.on('end',()=>{
       console.log( queryString.parse(data));//只能传字符，所以在这里还要解析一次
    });
});
var postData={
    name:'llx',
    age:'23'
}
//表单提交
//client.write(queryString.stringify(postData));
client.end(queryString.stringify(postData));
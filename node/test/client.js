const http=require('http');
const fs=require('fs');
const options={
    protocol:'http:',
    hostname:'nodejs.cn',
    path:'/assets/api/script.js',
    method:'GET',
    headers:{
        'Content-Type':'application/javascript; charset=utf-8'
    }
};
//实例被创建的时候就已经发送请求了，所以后面要调用end
const req=http.request(options,(res)=>{
	res.setEncoding('utf8');
    res.on('data',(chunk)=>{

        fs.writeFile('test.js',chunk,err=>{
            if(err) throw err;
            console.log('ok');
        });
    });
});

req.end();
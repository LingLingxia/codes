const http =require('http');
const queryString=require('querystring');
const fs=require('fs');
fs.unlink('2.jpg',(err)=>{
    if(err) throw err;
    console.log('delete success');
});
var client=http.request({
    host:'127.0.0.1',
    method:'get',
    path:'/',

},(res)=>{
    let data='';
    res.setEncoding('binary');
    res.on('data',(chunk)=>{
        data+=chunk;
    });
    res.on('end',()=>{
        fs.writeFile('2.jpg',data,{encoding:'binary'},(err)=>{
            if(err) throw err;
            console.log('grab success');
        });
    });
    // var writeStream=fs.createWriteStream('1.jpg');
    // res.pipe(writeStream);
});

client.end();
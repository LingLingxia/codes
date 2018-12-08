var dgram=require('dgram');

var message = Buffer.from('node.js2233');

//服务器和客户端好像都是一样的创建方式
var client= dgram.createSocket('udp4');
client.send(message,0,message.length,41234,'localhost',(err,bytes)=>{
    client.close();
})

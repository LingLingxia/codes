const net = require('net');
const client = net.createConnection({port:7890},()=>{
  console.log('已连接到服务器');
  client.write('hello world');
  client.end();
}) 

client.on('data',(data)=>{
 console.log(data.toString());
})

client.on('end',()=>{
  console.log('end');
})

client.on('error',(err)=>{
  console.log(err);
})
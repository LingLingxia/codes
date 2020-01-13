const net = require('net');
//createServer创建一个服务器，创建一个Server类
//listening 和 connection事件的区别
//new net.Socket 和 net.createConnection的区
const server = net.createServer((socket)=>{
  //  console.log(server.address())//{ address: '::', family: 'IPv6', port: 7890 }浏览器刷新一次输出俩，socket就只有一次
  //  server.getConnections((err,count)=>{
  //   if(count===1){
  //     server.unref();//允许退出程序
  //   }
  //  })
 //  console.log(socket.localAddress,socket.localPort)
 socket.on('data',(data)=>{
   console.log('socket',data.toString());
 })

 socket.write('服务器的信息');
 socket.end('end信息');
}).listen(7890,()=>{
  console.log('服务已经在7890端口监听')
});

server.on('close',()=>{
  console.log('close');
});

server.on('error',(err)=>{
  console.log(err);
})
// server.close(()=>{
//   console.log('closed');
// })

#net
- http模块是基于net模块的封装，socket和http.ClientRequest,http.Server都继承自EventEmitter，主要传输数据的事件和函数有'data','end',write(),end();
- 一个http响应，服务端必须调用.end()表示此次连接结束，但是websocket不需要调用end.



##  创建一个tcp服务器
net.createServer模块可以创建一个tcp服务器，传入的回调函数自动监听connect事件，socket作为参数传给回调函数，然后用socket与客户端通信，不同的客户端连接的时候创建的都是不同的socket，可以使用server.getConnections来获取最大连接数。
```
const net = require('net');
const server = net.createServer((socket)=>{
socket.on('data',(data)=>{
  console.log('socket',data.toString());
})
socket.write('服务器的信息');
socket.end('end信息');
}).listen(7890,()=>{
  console.log('服务已经在7890端口监听')
});

```
### 
## 创建一个tcp客户端
net.createConnection()返回一个socket，可以在调用的时候传入连接参数，也可以先创建一个空的，再调用socket.connect(opt)连接到服务器
```
const net = require('net');
const client = net.createConnection({port:7890},()=>{
  console.log('已连接到服务器');
  client.write('hello world');
  client.end();
}) 

client.on('data',(data)=>{
 console.log(data.toString());
})
```
服务器和和客户端通过这个socket来交换信息。
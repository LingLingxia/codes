var WebSocket = require('ws');
var wss = new WebSocket.Server({port:8181});
wss.on('connection',function(ws){
  console.log('Server:收到连接');
  ws.on('message',function(message){
    console.log("server:收到消息",message);
  })
})
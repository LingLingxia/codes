var WebSocket = require('ws');
var wss = new WebSocket.Server({port:8181});
const map=new Set();
wss.on('connection',function(ws){
  map.add(ws);
  console.log('Server:收到连接');
  ws.on('message',function(message){
    map.forEach(w=>{
      if(w!=ws){
        w.send(message);
      }
    })
    console.log("server:收到消息",message);
  })
  ws.on('close', function () {
    map.delete(ws);
    // map.forEach(w=>{
    //   if(w==ws){
    //     map.delete(w);
    //   }
    // })
    console.log('disconnected');
  });
  
})
let ws = new WebSocket("ws://localhost:8181");
ws.onopen= function(){
  console.log("start");
  ws.send("client:hello");
}

ws.onmessage = function(e){
  console.log("client:接受到服务端的消息"+e.data);
  setTimeout(()=>{
    ws.close();
  },5000);
}
ws.onclose = function(params){
  console.log("client:关闭链接")
}
const net = require('net');
const crypto = require('crypto');
net.createServer((socket)=>{
  //完成tcp握手之后开始传输数据
  const header = {};
  socket.once('data',(data)=>{
    let tmpHeader = data.toString().split('\r\n');
    tmpHeader.shift();
    tmpHeader.forEach(item=>{
      if(item){
        let index = item.indexOf(':');
        const key = item.substr(0,index);
        const value = item.substr(index+1);
        header[key.trim().toLocaleLowerCase()] = value.trim();     
      }
    })
    if(header.upgrade.toLocaleLowerCase()==='websocket'&&header['sec-websocket-version']=='13'){
      const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
      const socketkey = header['sec-websocket-key']
      const hash = crypto.createHash('sha1')  // 创建一个签名算法为sha1的哈希对象
      hash.update(`${socketkey}${GUID}`)  // 将key和GUID连接后，更新到hash
      const result = hash.digest('base64') // 生成base64字符串
      const responseHeader = `HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-Websocket-Accept: ${result}\r\n\r\n`;
      socket.write(responseHeader)
      //server-2.js
      socket.on('data',(d)=>{
        console.log(d);
      })
    }
  })
}).listen(8083);

const net = require('net');
const crypto = require('crypto');
const map = new Set();
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
      map.add(socket);
      socket.on('data',(d)=>{
        const decodedData = decodeWsFrame(d);
          if (decodedData.opcode === 8) {
            //frame-opcode-control    = %x8 ; connection close
            console.log('close');
            socket.end()  // 与客户端断开连接
            map.delete(socket);
          } else {
            map.forEach(w=>{
              if(w!=socket){
                w.write(encodeWsFrame({ payloadData: decodedData.payloadData || "" }))
              }
            })
          }
        })

    }
  })
}).listen(8083);


function decodeWsFrame(data) {
  let start = 0;
  let frame = {
    isFinal: (data[start] & 0x80) === 0x80,//取前-位做&操作
    opcode: data[start++] & 0xF,//取后4位做&操作
    masked: (data[start] & 0x80) === 0x80,//取前-位做&操作
    payloadLen: data[start++] & 0x7F,//取后7位做&操作
    maskingKey: '',
    payloadData: null
  };
// if 0-125, that is the  payload length
// If 126, the following 2 bytes interpreted as a 16-bit unsigned integer are the payload length
// If 127, the following 8 bytes interpreted as a 64-bit unsigned integer (the most significant bit MUST be 0) are the payload length.
  if (frame.payloadLen === 126) {
    //如果等于126 ，接下来的两个字节作为长度
    //data[3]左移8位 + data[4];
    frame.payloadLen = (data[start++] << 8) + data[start++];
  } else if (frame.payloadLen === 127) {
    //如果等于127  接下来的8个字节作为长度
    frame.payloadLen = 0;
    for (let i = 7; i >= 0; --i) {
      frame.payloadLen += (data[start++] << (i * 8));
    }
  }

  if (frame.payloadLen) {
    if (frame.masked) {
      const maskingKey = [
        data[start++],
        data[start++],
        data[start++],
        data[start++]
      ];

      frame.maskingKey = maskingKey;
      // Octet i of the transformed data ("transformed-octet-i") is the XOR of octet i of the 
      //original data ("original-octet-i") with octet at indexi modulo 4 of the masking key ("masking-key-octet-j"):
      // j                   = i MOD 4
      //transformed-octet-i = original-octet-i XOR masking-key-octet-j
      frame.payloadData = data
        .slice(start, start + frame.payloadLen)//截取数据的长度 单位为字节
        .map((byte, idx) => byte ^ maskingKey[idx % 4]);//解密
    } else {
      frame.payloadData = data.slice(start, start + frame.payloadLen);//不需要解密
    }
  }

  return frame;
}


function encodeWsFrame(data) {//对上面函数的反向编码，不需要mask
  const isFinal = data.isFinal !== undefined ? data.isFinal : true,
    opcode = data.opcode !== undefined ? data.opcode : 1,
    payloadData = data.payloadData ? Buffer.from(data.payloadData) : null,
    payloadLen = payloadData ? payloadData.length : 0;

  let frame = [];

  if (isFinal) frame.push((1 << 7) + opcode);
  else frame.push(opcode);

  if (payloadLen < 126) {
    frame.push(payloadLen);
  } else if (payloadLen < 65536) {// 127*2^8 + 127
    frame.push(126, payloadLen >> 8, payloadLen & 0xFF);
  } else {
    frame.push(127);
    for (let i = 7; i >= 0; --i) {
      frame.push((payloadLen & (0xFF << (i * 8))) >> (i * 8));
    }
  }

  frame = payloadData ? Buffer.concat([Buffer.from(frame), payloadData]) : Buffer.from(frame);
  return frame;
}

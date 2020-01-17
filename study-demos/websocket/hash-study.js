const crypto = require('crypto');
const key=crypto.createHash('sha1').update('NlkoAtcpQlENt8+gHHx1Aw==258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');
console.log(key);
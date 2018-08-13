var dgram = require('dgram');

var server=dgram.createSocket('udp4');
server.on('message',(msg,rinfo)=>{
    console.log(`server got: ${msg} from ${rinfo.address} : ${rinfo.port}`);

});

server.on('listening',()=>{
    var address = server.address();
    console.log(`server listening ${address.address } : ${address.port}`)
});
server.bind(41234);
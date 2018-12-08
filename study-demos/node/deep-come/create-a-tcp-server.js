var net= require('net');
var server=net.createServer(function(socket){
    socket.on('data',(data)=>{
        socket.write('hello'+data);
    })

    socket.on('end',()=>{
        console.log('over');
    })
    socket.write('welcome to js demo');
});

server.listen(8124,()=>{
    console.log('server bound');
})
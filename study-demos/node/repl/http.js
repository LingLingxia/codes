const http=require('http');
const net=require('net');
const url=require('url');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('okay');
});

server.on('connect',(req, cltSocket, head) => {
         const serveUrl=url.parse(`http://${req.url}`);
         const serveSocket=net.connect(serveUrl.port, serveUrl.hostname, ()=>{
         cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
        'Proxy-agent: Node.js-Proxy\r\n' +
        '\r\n');
        serveSocket.write(head);
        serveSocket.pipe(cltSocket);
        cltSocket.pipe(serveSocket);
    });

});
//服务开启后马上发送请求
server.listen(3000,'127.0.0.1',()=>{
    const options = {
        port: 3000,
        hostname: '127.0.0.1',
        method: 'CONNECT',
        path: 'www.baidu.com:80'
    };
    const req=http.request(options);
    req.end();
    req.on('connect',(res, socket, head)=>{

        console.log('connected');

        socket.write('GET / HTTP/1.1\r\n' +
        'Host: www.baidu.com:80\r\n' +
        'Connection: close\r\n' +
        '\r\n');

        socket.on('data',(chunk)=>{
            console.log(chunk.toString());
        });

        socket.on('end',()=>{
            server.close();
        });
    });
});
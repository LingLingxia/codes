var http = require('http');
let cnt = 0;
var server=http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
    cnt++;
    console.log(cnt);
    if (cnt > 3) {
        console.log('3333333--');
        server.close();
    }

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
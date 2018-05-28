const http=require('http');
const req=http.request({
    port:3000,
    hostname:'127.0.0.1',
    method: 'CONNECT'
});

req.on('connect',()=>{
    console.log('success');
})
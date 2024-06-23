const http = require("http");

const client = http.request({
    host:'127.0.0.1',
    method:'post',
    path:'/signin',
    port:5001,
    headers:{
        'content-type':"application/json"
    }
},(res)=>{
    let data = ''
    res.on('data',(chunk)=>{
        data +=chunk
    })
    res.on('end',()=>{
        let e=JSON.parse(data);
        console.log(e);

       const client =   getNewClient(e.token);
       client.end();
    })
})

var postData = {
    name:"user",
    pwd:"password"
}
const getNewClient = ( token)=>{
    return http.request({
        host:'127.0.0.1',
        method:'get',
        path:'/employees',
        port:5001,
        headers:{
            'Authorization':"Bearer "+token
        }
    },(res)=>{
        let data = ''
        res.on('data',(chunk)=>{
            data+=chunk
        })
        res.on('end',()=>{
            //let e = JSON.parse(data);
            console.log(data);
        })
    })
}

client.end(JSON.stringify(postData));

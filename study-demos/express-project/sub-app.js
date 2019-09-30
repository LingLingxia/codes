const express = require('express');
const app = express();
const admin = express();
const secret = express();

admin.get('/',(req,res)=>{
    console.log(admin.mountpath);
    res.send('Admin Homepage');
})

secret.get('/',(req,res)=>{
    console.log(secret.mountpath); // /secr*t
    res.send('Admin Secret');
})

admin.use('/secr*t',secret);
app.use(['/adm*n','/manager'],admin);
app.listen(3100,()=>{
    console.log('服务器开启-3100');
})

console.log(app.METHOD());
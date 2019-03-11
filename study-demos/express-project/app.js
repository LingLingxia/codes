const express = require('express');
var app = express();
var router = express.Router();
router.use((req,res,next)=>{
    console.log('%s %s %s',req.method,req.url,req.path);
    next();
})

router.use('/bar',(req,res,next)=>{
    next();
})

router.use('/key',(req,res,next)=>{
    res.send('This is a key');
})

router.use((req,res,next)=>{
    res.send('Hello World');
    console.log('nonono');
})

app.use('/foo',router);
app.use('/node_modules',express.static('node_modules'));
app.use(express.static('views'));
app.listen(3000,()=>{
    console.log('服务已开启-3000')
})
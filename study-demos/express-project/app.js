const express = require('express');
const bodyparser = require('body-parser');
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

//后端api请求处理
var api = express.Router();
api.use(bodyparser.json());
api.use('/register',(req,res,next)=>{

  const params = req.body;
  if(params&&params.name==='llx'&&params.password === '123456'){
      res.send('register successful');
  }else{
      res.status(502).send('bad request');
  }
});

app.use('/api',api);
//后端api请求接口
app.use('/foo',router);
app.use('/node_modules',express.static('node_modules'));
app.use(express.static('views'));
app.listen(3000,()=>{
    console.log('服务已开启-3000')
})
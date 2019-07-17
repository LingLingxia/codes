const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const pug = require('pug');

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
api.use(cookieParser('a'));
api.use('/register',(req,res,next)=>{
  const params = req.body;
  fs.readFile('./db.json','utf8',(err,data)=>{
      const userInfo = JSON.parse(data)||{};
      if(userInfo[params.name]){
          res.status(400).send('用户名已注册');
      }else{
          userInfo[params.name] = params.password;
          fs.writeFile('./db.json',JSON.stringify(userInfo),(err)=>{
              if(!err){
                  res.send('注册成功');
              }else{
                  console.log(err);
              }
          })
      }

  });
});

api.use('/login',(req,res,next)=>{
    const params = req.body;
    req.secret = 'a';
    fs.readFile('./db.json','utf8',(err,data)=>{
        const userInfo = JSON.parse(data)||{};
        if(userInfo[params.name]&&userInfo[params.name]===params.password){
            res.cookie('user',params.name+'-'+params.password,{signed:true});

            res.send('登陆成功');
        }else{
            res.send('用户名或密码错误');
        }
    });
})

api.use('/cookieLogin',function(req,res){
    var json = req.signedCookies;
    console.log(json,req.cookies);
});

app.use('/api',api);
//后端api请求接口
app.use('/foo',router);
app.use('/node_modules',express.static('node_modules'));
app.use('/pug',function(req,res){
   const pug = require('pug');
   //renderFile 和compileFile要分清楚
   const compiledText = pug.renderFile('pug/test.pug',{pretty:true,name:'Foo'});
   console.log(compiledText);
   res.send(compiledText);
})

app.use(express.static('views'));
app.listen(3100,()=>{
    console.log('服务已开启-3100')
})
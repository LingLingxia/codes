const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const pug = require('pug');
const path = require('path');


//中间件测试路由
const bodyParserRouter = require('./middleware/body-parser');




//中间件测试路由end
var app = express();
var router = express.Router();
var upload = multer({ dest: 'uploads/' });
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
    var name = json&&json.user&&json.user.split('-');
    if(!name||name.length!=2) {
        res.send('登陆失败');
        return ;
    }  
    fs.readFile('./db.json','utf8',(err,data)=>{
        const userInfo = JSON.parse(data)||{};
        if(userInfo[name[0]]&&userInfo[name[0]]==name[1]){
            res.send('登陆成功');
        }else{
            res.send('登陆失败');
        }
    })
    console.log(json,req.cookies);
});

app.use('/api',api);
//后端api请求接口
app.use('/foo',router);
app.use('/node_modules',express.static('node_modules'));
//监听pug文件
fs.readdir('./pug/',(err,pages)=>{
    pages.forEach(pageName=>{
        if(pageName.slice(-4)==='.pug'){
            let path = pageName.slice(0,pageName.length-4);
            app.use('/'+path,function(req,res){
                const compiledText = pug.renderFile('pug/'+pageName,{pretty:true});
                console.log(compiledText);
                res.send(compiledText);
            })
        }   
    })
});

app.use('/file',upload.any(),function(req,res){
    console.log(req.files);
    var  ret = '';
    req.files.forEach(file=>{
        const filePath = path.parse(file.originalname);
        const newPath = `${file.path}.${filePath.ext}`;
        fs.rename(`${file.path}`,newPath,function(err){
            if(err){
                console.log(err);
            }
        });
        ret +=('---'+newPath);
    })
    res.send(ret);
});

app.use(express.static('views'));


//路由测试
app.use('/body-parser',bodyParserRouter);

app.listen(3100,()=>{
    console.log('服务已开启-3100')
});

app.param('id',function(req,res,next,id){
    console.log('called only once');
    next();
});

app.get('/user/:id',function(req,res,next){
    console.log('althought this matches');
    next();
});

app.get('/user/:id',function(req,res){
    console.log('and this matches too');
    res.end();
})
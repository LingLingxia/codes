const Koa = require('koa');
const koaBody = require('koa-body');//只支持json和form
const mongoose = require('mongoose');
const parameter = require('koa-parameter')
const koaStatic = require('koa-static');
const app = new Koa();
const routing = require('./routes');
const { connectionStr } = require('./config');
const path = require('path');
mongoose.connect(connectionStr,{useNewUrlParser: true},()=>{
  console.log('mongo链接成功')
})
mongoose.connection.on('error---------',console.error);

app.use(koaBody({
  multipart:true,
  formidable:{//一个node npm包
    uploadDir:path.join(__dirname,'/public/uploads'),//public和uploads必须都要有值
    keepExtensions:true,//保留拓展名
  }
}));
app.use(parameter(app));
// app.use(route.routes());
// app.use(usersRoute.routes());
routing(app);
app.listen(3000,()=>{
  console.log('server start');
})
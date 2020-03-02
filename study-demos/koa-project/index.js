const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const mongoose = require('mongoose');
const parameter = require('koa-parameter')
const app = new Koa();
const routing = require('./routes');
const { connectionStr } = require('./config');

mongoose.connect(connectionStr,{useNewUrlParser: true},()=>{
  console.log('mongo链接成功')
})
mongoose.connection.on('error',console.error);
// route.get('/',(ctx)=>{
//   ctx.body = "这是主页";
// })

// usersRoute.get('/',(ctx)=>{//获取列表
//   ctx.body = [{name:'lilie'},{name:'hanmeimei'}];
// })

// usersRoute.post('/',(ctx)=>{//新增
//   ctx.body = {name:'lilie'};
//   ctx.request.body;
// })
// usersRoute.get('/:id',(ctx)=>{
//   ctx.body = `这是用户${ctx.params.id}`
// })
// usersRoute.put('/:id',(ctx)=>{//修改
//   ctx.body = {name:'lilie2'}
// })
// usersRoute.delete('/:id',(ctx)=>{
//   ctx.status = 204
// })
app.use(bodyparser());
app.use(parameter(app));
// app.use(route.routes());
// app.use(usersRoute.routes());
routing(app);
app.listen(3000,()=>{
  console.log('server start');
})
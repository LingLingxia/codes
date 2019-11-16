const Koa = require('koa');
const path = require('path');
const koaRoute = require('koa-router');
const bodyparser = require('koa-bodyparser');
const app = new Koa();
const usersRoute = new koaRoute({prefix:'/users'});
const route = new koaRoute();
route.get('/',(ctx)=>{
  ctx.body = "这是主页";
})

usersRoute.get('/',(ctx)=>{//获取列表
  ctx.body = [{name:'lilie'},{name:'hanmeimei'}];
})

usersRoute.post('/',(ctx)=>{//新增
  ctx.body = {name:'lilie'};
  ctx.request.body;
})
usersRoute.get('/:id',(ctx)=>{
  ctx.body = `这是用户${ctx.params.id}`
})
usersRoute.put('/:id',(ctx)=>{//修改
  ctx.body = {name:'lilie2'}
})
usersRoute.delete('/:id',(ctx)=>{
  ctx.status = 204
})
app.use(bodyparser());
app.use(route.routes());
app.use(usersRoute.routes());
app.listen(3000,()=>{
  console.log('server start');
})
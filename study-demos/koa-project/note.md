```
usersRoute.get('/',(ctx)=>{//获取列表
  ctx.body = [{name:'lilie'},{name:'hanmeimei'}];
})

usersRoute.post('/',(ctx)=>{//新增
  ctx.body = {name:'lilie'};
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
```
### 控制器最佳实践
- 每个资源的控制器放在不同文件
- 类 + 类方法编写
- 参数判断,错误处理
### 中间件的顺序很重要
```
app.use(bodyparser());
app.use(route.routes());
app.use(usersRoute.routes());
```
const Koa = require('koa');
const path = require('path');
const KoaStatic = require('koa-static');
const app = new Koa();
const staticPath = './static'
app.use(KoaStatic(path.join( __dirname,  staticPath)))
app.listen(3000,()=>{
  console.log('server start');
})
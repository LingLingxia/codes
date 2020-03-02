const Router = require('koa-router');
const jwt = require('koa-jwt');
const router = new Router({ prefix: '/users' });
const {
  findById,find,create,update,del,login,checkOwner
} = require('../controllers/users');

const { secret } = require('../config');
// const auth = async(ctx,next)=>{
//   const { authorization ='' } = ctx.request.header;
//   const token = authorization.replace('Bearer ','');
//   try{
//     const user = jwt.verify(token,secret);
//     ctx.state.user = user;
//   }catch(err){
//     ctx.throw(401,err.message);
//   }
//   await next();
// }
const auth = jwt({secret});
router.get('/',find);
router.post('/',create);
router.patch('/:id',auth,checkOwner,update);
router.delete('/:id',auth,checkOwner,del);
router.get('/:id',findById);
router.post('/login',login)
module.exports = router;
const Router = require('koa-router');
const jwt = require('koa-jwt');
const router = new Router({ prefix: '/topic' });
const {
  findById,find,create,update,
} = require('../controllers/topic');
const { secret } = require('../config');
const auth = jwt({secret});
router.get('/',find);
router.post('/',auth,create);
router.patch('/:id',auth,update);
router.get('/:id',findById);


module.exports = router;
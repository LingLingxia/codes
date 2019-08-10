## express.Router()
- 匹配已/foo开头的所有路由,子路由写在router.use
`
var router = express.Router();
app.use('/foo',router);
router.use(path,()=>{})


## app.mountpath
- 作为一个sub-app,它被挂载在了哪些路径上.


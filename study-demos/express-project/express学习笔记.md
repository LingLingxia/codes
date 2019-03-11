## express.Router()
- 匹配已/foo开头的所有路由,子路由卸载router.use
`
var router = express.Router();
app.use('/foo',router);
router.use(path,()=>{})
`
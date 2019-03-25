## express.Router()
- 匹配已/foo开头的所有路由,子路由写在router.use
`
var router = express.Router();
app.use('/foo',router);
router.use(path,()=>{})

### 2019-03-12心得 路快走歪了
>对node.js的学习应该有目的性,主要学习它的文件操作,前后端http交互部分,把它当成一个为了前端学习辅助工具,对于数据库部分可以暂时不学习,要明白事情的轻重缓急.
>明日计划:express各种api的调用.
>接下来的计划:后端文件读取,写入.前端文件读取,写入.
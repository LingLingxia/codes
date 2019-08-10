const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
//express内置了这两个函数
// router.use('/json',bodyParser.json(),(req,res)=>{  
//     console.log(req.body);
//     res.send('ok');
// })
// router.use('/urlencoded',bodyParser.urlencoded({extended:false}),(req,res)=>{
//     console.log(req.body,req.query);//只有post请求才有这个body,get请求直接解析到query里面了
//     res.send('urlencoded-ok');
// })

router.use('/json',express.json(),(req,res)=>{  
    console.log(req.body);
    res.send('ok');
})
router.use('/urlencoded',express.urlencoded({extended:false}),(req,res)=>{
    console.log(req.body,req.query);//只有post请求才有这个body,get请求直接解析到query里面了
    res.send('urlencoded-ok');
})


router.use('/text',bodyParser.text(),(req,res)=>{
    console.log(req.body);
    res.send('text-ok');
})

module.exports = router;
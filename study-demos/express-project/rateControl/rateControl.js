const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// 创建速率限制器
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 每15分钟的时间 ,
    max: 100, // 每个IP15分钟内最多允许100个请求
    message: 'Too many requests from this IP, please try again later.',
});

// 将速率限制器应用于所有请求
app.use(limiter);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
const express = require('express');
const slowDown = require('express-slow-down');

const app = express();

// 创建请求节流器
const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 每15分钟的时间
    delayAfter: 100, // 允许每个IP在15分钟内发送100个请求
    delayMs: 500, // 每超过一个请求，将增加500ms的延迟
});

// 创建请求节流器2
const speedLimiter2 = slowDown({
    windowMs: 15 * 60 * 1000, // 15分钟的时间窗口
    delayAfter: 100, // 每个IP允许发送100个请求
    delayMs: 500, // 超过限制后，每个请求增加500毫秒的延迟
    onLimitReached: (req, res, options) => { //options 是传给slowDown的参数
        res.status(429).json({ message: options.message });
    },
    handler: (req, res, next, options) => { //大部分时间不需要用这个，req.slowDown.current  表示当前请求的延迟时间，如果没有到limit，这个值是0
        if (req.slowDown.current > 0) {
            res.status(429).json({ message: options.message});
        } else {
            next();
        }
    },
    message: 'Too many requests from this IP, please try again later.' 
});


// 将请求节流器应用于所有请求
app.use(speedLimiter);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

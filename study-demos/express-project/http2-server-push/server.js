const http2 = require('http2');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// HTTPS 证书
const options = {
  key: fs.readFileSync('path/to/your/ssl/key.pem'),
  cert: fs.readFileSync('path/to/your/ssl/cert.pem')
};

// 静态文件中间件
app.use(express.static(path.join(__dirname, 'public')));

// 示例路由
app.get('/', (req, res) => {
  const stream = res.stream;
  if (stream.pushAllowed) {
    // 服务器推送关键资源，优化首页加载速度
    stream.push('/main.js', {}, (err, pushStream) => {
      if (err) throw err;
      pushStream.respondWithFile(path.join(__dirname, 'public', 'main.js'));
    });
    stream.push('/styles.css', {}, (err, pushStream) => {
      if (err) throw err;
      pushStream.respondWithFile(path.join(__dirname, 'public', 'styles.css'));
    });
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 创建 HTTP/2 服务器
const server = http2.createSecureServer(options, app);

server.listen(3000, () => {
  console.log('HTTP/2 server is listening on port 3000');
});

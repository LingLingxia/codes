# 类 http.ClientRequest  客户端

- `http.request()`创建该类
- 为该对象创建`'response'` 监听相应.第一个监听参数为 `http.IncomingMessage`实例
- 在 'response' 事件期间，可以添加监听器到响应对象，比如监听 'data' 事件。
### 事件 connect(？？) 
-  每次服务器使用 CONNECT 方法响应请求时都会触发

### 函数 request.getHeader request.setHeader  request.removeHeader
```
request.setHeader('content-type', 'text/html');
request.setHeader('Content-Length', Buffer.byteLength(body));
request.setHeader('Cookie', ['type=ninja', 'language=javascript']);
const contentType = request.getHeader('Content-Type');
// contentType 是 'text/html'。
const contentLength = request.getHeader('Content-Length');
// contentLength 的类型为数值。
const cookie = request.getHeader('Cookie');
// cookie 的类型为字符串数组。
request.removeHeader('Content-Type');
```

### 函数 request.setTimeout
- 超时设置

### 函数 request.write(chunk[, encoding][, callback]) 发送请求体
- 发送一个请求主体的数据块。 通过多次调用此方法，可以将请求主体发送到服务器，在这种情况下，建议在创建请求时使用 `['Transfer-Encoding', 'chunked']` 请求头行。

- encoding 参数是可选的，仅当 chunk 是字符串时才适用。 默认为 'utf8'。

- callback 参数是可选的，当刷新此数据块时调用，但仅当数据块非空时才会调用。


# 类 http.Server 服务器
- `http.createServer()`创建

### 事件 connect (request<http.IncomingMessage>,socket,head)=>{}
- 每次客户端请求 HTTP CONNECT 方法时触发。 如果未监听此事件，则请求 CONNECT 方法的客户端将关闭其连接。
- 触发此事件后，请求的套接字(??)将没有 'data' 事件监听器，这意味着它需要绑定才能处理发送到该套接字上的服务器的数据。

### 事件 request (request<http.IncomingMessage>,response<http.ServerResponse>)=>{}
- 有客户端请求时触发

### 事件 connection 
- 建立新的 TCP 流时触发

### 函数 server.listen()
- 开始监听

# 类 http.ServerResponse 响应类
- 作为第二个参数传给 http.Server类监听的 'request' 事件
### 事件 close
- 表明在调用 response.end() 或能够刷新之前终止了底层连接
### 事件 finish
- 响应发送后触发
### 函数 response.addTrailers 添加尾部响应头
- 一般用于文件传输 
### 函数 response.end([data][, encoding][, callback])
- 此方法向服务器发出信号，表明已发送所有响应头和主体，该服务器应该视为此消息已完成。 
- 必须在每个响应上调用此 response.end() 方法

### 函数 response.finished
- 布尔值，表明响应是否已完成

### 函数 response.getHeader,response.setHeader,response.removeHeader
```
response.setHeader('Content-Type', 'text/html');
response.setHeader('Content-Length', Buffer.byteLength(body));
response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
const contentType = response.getHeader('content-type');
// contentType 是 'text/html'。
const contentLength = response.getHeader('Content-Length');
// contentLength 的类型为数值。
const setCookie = response.getHeader('set-cookie');
// setCookie 的类型为字符串数组。
```

### 函数 response.write

# 类 http.IncomingMessage 请求类

# 函数 http.createServer 创建一个服务端
# 函数 http.request 创建一个客户端
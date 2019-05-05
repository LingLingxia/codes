- 流可以是可读的、可写的、或者可读可写的。 所有的流都是 EventEmitter 的实例。
- 本章节内容很少直接使用,但是需要知道继承自流的对象所拥有的特点.
- 
Writable - 可写入数据的流（例如 fs.createWriteStream()）。
Readable - 可读取数据的流（例如 fs.createReadStream()）。
Duplex - 可读又可写的流（例如 net.Socket）。
Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。

## 可写流 
- http.ServerResponse 服务端响应类    serve 'request'事件的第二个参数
- http.ClientRequest 服务器请求  http.request创建 
- fs.WriteStream

- zlib 流
- crypto 流
- TCP socket
- 子进程 stdin
- process.stdout、process.stderr

## 可读流  
- http.IncomingMessage  客户端的 HTTP 响应   request  'response'事件的第一个参数
- http.IncomingMessage 服务器的 HTTP 请求      serve 'request'事件的第一个参数
- fs.readStream

- zlib 流
- crypto 流
- TCP socket
- 子进程 stdout 与 stderr
- process.stdin

# 类 stream.Writable 

### 事件 close
- 当流或其底层资源（比如文件描述符）被关闭时触发。 表明不会再触发其他事件，也不会再发生操作。不是所有可写流都会触发 'close' 事件。

### 事件 drain
- 如果调用 stream.write(chunk) 返回 false，则当可以继续写入数据到流时会触发 'drain' 事件。

### 事件 error

### 事件 finish
- 调用 stream.end() 且缓冲数据都已传给底层系统之后触发。

### 事件 pipe
- 对应可读流的 函数 pipe();  
- 当在可读流上调用 stream.pipe() 时触发。(此可写流被作为pipe的参数传入,监听函数第一个参数为 可读流(来源)src)

###  事件 unpipe
- 当在可读流上调用 stream.unpipe() 时触发。(此可写流被作为unpipe的参数传入,监听函数第一个参数为 可读流(来源)src)

### 函数  writable.write(chunk[, encoding][, callback])
- 对应可读流的 'data' 事件

### 函数 writable.end([chunk][, encoding][, callback])
- 对应可写流的 'end' 事件

# 类 可读流stream.Readable
 
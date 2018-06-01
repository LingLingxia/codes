200 OK

204  NoContent
请求已成功处理,但是没有资源可以返回,返回的响应报文中
不含实体的主体部分(不允许返回任何实体的主体)

206 Partial Content
范围请求

301 Moved Permanently 
永久性重定向（ 资源已被分配新的url） 更新书签（如果有的话）

302 Found
临时重定向 不更新书签


303 See Other
该状态码表示由于请求对应的资源存在着另一个 URI， 应使用 GET
方法定向获取请求的资源。


(当 301、 302、 303 响应状态码返回时， 几乎所有的浏览器都会把
POST 改成 GET， 并删除请求报文内的主体， 之后请求会自动再次
发送。
301、 302 标准是禁止将 POST 方法改变成 GET 方法的， 但实际使
用时大家都会这么做。)


304 Not Modified
服务器端允许请求访问资源， 但未满足条件的情况
条件:
采用 GET方法的请求报文中包含 
If-Match，
If-ModifiedSince，
If-None-Match，
If-Range，
If-Unmodified-Since 中任一首部

307 Temporary Redirect 
同302


400 Bad Request
请求报文语法错误

401 Unauthorized
需要认证信息


403 Forbidden
资源拒绝访问

404 Not Found


500 Internal Server Error

服务器故障

502 Service Unavailable
该状态码表明服务器暂时处于超负载或正在进行停机维护， 现在无法
处理请求。 如果事先得知解除以上状况需要的时间， 最好写入
RetryAfter 首部字段再返回给客户端



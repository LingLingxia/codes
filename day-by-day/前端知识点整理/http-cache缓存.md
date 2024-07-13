| 头字段             | 作用   | 常见指令 | 说明  |
|------------------|-------------------------|-------------|--------------|
| Cache-Control    | 定义缓存策略 | max-age, public, private, no-cache, no-store | 控制缓存的存储时间、范围等。|
| Expires           | 定义缓存内容的绝对过期时间          | 无| 过期时间以 GMT 表示。                     |
| ETag              | 资源的标识符，用于协商缓存          | 无| 与 If-None-Match 配合使用。               |
| Last-Modified     | 资源的最后修改时间                 | 无| 与 If-Modified-Since 配合使用。          |
| If-Modified-Since | 请求时检查资源是否在指定时间后被修改 | 无| 与 Last-Modified 配合使用。             |
| If-None-Match     | 请求时检查资源是否与提供的 ETag 匹配 | 无| 与 ETag 配合使用。                       |



| 指令         | 描述                             | 常见用法                           |
|--------------|----------------------------------|------------------------------------|
| **`max-age`** | 设定缓存内容的最大存储时间，单位为秒。 | `Cache-Control: max-age=3600`      |
| **`public`**  | 允许所有缓存服务器缓存响应内容。   | `Cache-Control: public, max-age=86400` |
| **`private`** | 仅允许客户端浏览器缓存响应内容。   | `Cache-Control: private, max-age=3600` |
| **`no-cache`**| 必须在使用缓存内容之前重新验证。   | `Cache-Control: no-cache`         |
| **`no-store`**| 禁止缓存请求和响应内容。          | `Cache-Control: no-store`         |


- when cache-control indicate resource is valid ,client does not need to send http request to server
- when cache-control show that resource is invalid or require client to send http for validation before use cache , client send http request with conditional header field.
- when server received http request ,it will response with 304 when resource has not updated , and it responses with 200 and new resource when resource changed.
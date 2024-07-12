| Feature             | HTTP/1.1                        | HTTP/2                              |
|---------------------|---------------------------------|-------------------------------------|
| **Protocol Type**   | Text-Based                      | Binary                              |
| **Performance**     | Single request/response, Head-of-Line Blocking | Multiplexing, reduced latency       |
| **Header Compression** | None                         | HPACK Header Compression             |
| **Connection Management** | Multiple connections, Persistent | Single connection, Multiplexing      |
| **Priority Control**| None                            | Priority and Dependency Management  |
| **Server Push**     | Not supported                   | Supported                           |
| **Security**        | TLS encryption possible         | TLS encryption required for major browsers |


安全性考虑：如果主要担心 XSS 攻击，可以选择使用 Secure 和 HttpOnly Cookie。如果主要担心 CSRF 攻击，可以选择使用 localStorage 并手动添加 Authorization 头。
开发便利性：localStorage 提供了更大的灵活性，适合单页应用，而 Secure 和 HttpOnly Cookie 更适合传统 Web 应用，提供了更自动化的身份验证流程。


- multiplexing
- header compression
- server push


advantage of http3
- Faster Connection Establishment
- More Reliable Data Transfer Under Weak Networks
- Solves Head-of-Line Blocking Problem
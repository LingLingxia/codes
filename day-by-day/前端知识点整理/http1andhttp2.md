| Feature             | HTTP/1.1                        | HTTP/2                              |
|---------------------|---------------------------------|-------------------------------------|
| **Protocol Type**   | Text-Based                      | Binary                              |
| **Performance**     | Single request/response, Head-of-Line Blocking | Multiplexing, reduced latency       |
| **Header Compression** | None                         | HPACK Header Compression             |
| **Connection Management** | Multiple connections, Persistent | Single connection, Multiplexing      |
| **Priority Control**| None                            | Priority and Dependency Management  |
| **Server Push**     | Not supported                   | Supported                           |
| **Security**        | TLS encryption possible         | TLS encryption required for major browsers |

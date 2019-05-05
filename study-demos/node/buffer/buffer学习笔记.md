- buffer是为了让js可以处理二进制文件而引进的的.
 ### Node.js 当前支持的字符编码有：

- 'ascii' - 仅适用于 7 位 ASCII 数据。此编码速度很快，如果设置则会剥离高位。

- 'utf8' - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8。

- 'utf16le' - 2 或 4 个字节，小端序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

- 'ucs2' - 'utf16le' 的别名。

- 'base64' - Base64 编码。当从字符串创建 Buffer 时，此编码也会正确地接受 RFC4648 第 5 节中指定的 “URL 和文件名安全字母”。

- 'latin1' - 一种将 Buffer 编码成单字节编码字符串的方法（由 RFC1345 中的 IANA 定义，第 63 页，作为 Latin-1 的补充块和 C0/C1 控制码）。

- 'binary' - 'latin1' 的别名。

- 'hex' - 将每个字节编码成两个十六进制的字符。

## 函数 Buffer.from
- `Buffer.from(array)` 副本
- `Buffer.from(arrayBuffer[, byteOffset[, length]])` 共享
- `Buffer.from(buffer)`  副本
- `Buffer.from(string[, encoding])`  副本
- `Buffer.from(object[, offsetOrEncoding[, length]])` 副本
- 从给定参数中创建一个Buffer


## 函数 Buffer.alloc(size[, fill[, encoding]])
```
size <integer> 新 Buffer 的所需长度。
fill <string> | <Buffer> | <integer> 用于预填充新 Buffer 的值。默认值: 0。
encoding <string> 如果 fill 是一个字符串，则这是它的字符编码。默认值: 'utf8'。
```

## 函数 Buffer.byteLength(string[, encoding])
```
string <string> | <Buffer> | <TypedArray> | <DataView> | <ArrayBuffer> | <SharedArrayBuffer> 要计算长度的值。
encoding <string> 如果 string 是字符串，则指定 string 的字符编码。默认值: 'utf8'。
返回: <integer> string 的字节数。
```
- 区别与str.length ,中文的返回值是str.length的三倍,英文则相等.

# 函数 Buffer.compare(buf1, buf2)
- 比较 buf1 与 buf2，主要用于 Buffer 数组的排序。 相当于调用 buf1.compare(buf2)。 返回数字

# 函数 Buffer.concat(list[, totalLength])
```
list <Buffer[]> | <Uint8Array[]> 要合并的 Buffer 数组或 Uint8Array 数组。
totalLength <integer> 合并后 Buffer 的总长度。
返回: <Buffer>
```

- 这是一个副本
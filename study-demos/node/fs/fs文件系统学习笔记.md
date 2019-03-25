
|事件类型|定义|监听函数|触发|
|:--:|:--:|:--:|:--:|
|系统内置事件|内置定义|自定义|内置触发|
|自定义事件|自定义|自定义|代码触发|
# 函数 fs.watch(filename[, options][, listener])
- `filename <string> | <Buffer> | <URL>`
- options {
    persistent:true,//default 持续监听
    recursive:false,//监视子目录
    encoding:utf-8,//传给listener的编码
}
- listener (eventType,filename)=>{}//eventType  'rename' or 'change'
- 监听器回调绑定在由 fs.FSWatcher 触发的 'change' 事件上，但它与 eventType 的 'change' 值不是一回事,详情见注释
# 类 fs.FSWatcher
- 所有 fs.FSWatcher 对象都是 EventEmitter 的实例，每当修改指定监视的文件，就会触发 'change' 事件。
### 事件 'change'
- `eventType <string>` 已发生的更改事件的类型。
- filename

```
const fs = require('fs');
const watcher = fs.watch('./watched-floder',(eventType,filename)=>{
    if(filename){
        //此函数等于下面fs.FSWatcher的监听函数,只有在rename 和 change的时候会监听
        //注意:虽然它绑定在change监听事件上面,不代表只监听change事件
        console.log('in fs.watch',eventType,filename);
    }
});

watcher.on('change',(eventType,filename)=>{

    if(filename){
        console.log('in fs.watcher',eventType,filename);
    }
})

watcher.on('close',(eventType,filename)=>{
    if(filename){
        console.log('in fs.watcher-close',eventType,filename);
    }
})

setTimeout(()=>{
    //调用关闭后确实关闭了监听,但是上面的函数也没有执行
    watcher.close();
},1000);

```
- 将文件new Fileo013.js改名为 newFileo01.js输出结果
```
in fs.watch rename newFileo013.js
in fs.watch rename newFileo01.js
in fs.watch change newFileo01.js
```
- 修改文件newFileo01.js里的内容一次,输出结果
```
in fs.watch change newFileo01.js
in fs.watch change newFileo01.js
```
# 函数 fs.stat(path[, options], callback)
- 返回文件/目录的信息  返回一个fs.Stats类
- `path <string> | <Buffer> | <URL>`
- options {
`bigint <boolean>` 返回的 fs.Stats 对象中的数值是否应为 bigint 型。默认值: false。

}
- (err,stats)=>{}

# 类 fs.Stats
- 从 fs.stat()、fs.lstat() 和 fs.fstat() 及其同步方法返回的对象都属于此类型
```
const fs = require('fs');
fs.stat('demo.txt',(err,stat)=>{
    console.log(stat);
    console.log(stat.isBlockDevice());//对象是否描述块设备 false
    console.log(stat.isCharacterDevice());//对象是否描述字符设备 false
    console.log(stat.isDirectory());//对象是否是目录 false
    console.log(stat.isFIFO());//对象描述是否先进先出管道 false
    console.log(stat.isFile());//对象是否是文件 true
    console.log(stat.isSocket());//对象是否描述套接字 false
    console.log(stat.isSymbolicLink());//对象是否描述符号链接 false
})

```
### Stats属性
```
Stats {
    dev: 3430564453, //包含该文件的设备的数字标识符。  ???
    mode: 33206,//描述文件类型和模式的位字段。
    nlink: 1,//文件存在的硬链接数。
    uid: 0,//user-id 拥有该文件（POSIX）的用户的数字型用户标识符。
    gid: 0,//group-id 拥有该文件（POSIX）的用户的数字型用户标识符。
    rdev: 0,//如果文件被视为特殊文件，则此值为数字型设备标识符。 ???
    blksize: undefined,//用于 I/O 操作的文件系统块的大小。
    ino: 5348024557568320,//包含该文件的设备的数字标识符。 ???
    size: 28,//文件大小 byte
    blocks: undefined,//为此文件分配的块数。
    atimeMs: 1553522551613.3064,//access-time 
    mtimeMs: 1553522576074.953,//modify-time
    ctimeMs: 1553522576074.953,//change-time 
    birthtimeMs: 1553522551613.3modify-time 064, 
    atime: 2019-03-25T14:02:31.613Z,
    mtime: 2019-03-25T14:02:56.075Z,
    ctime: 2019-03-25T14:02:56.075Z,
    birthtime: 2019-03-25T14:02:31.613Z 
}

```

### 文件属性的时间值
####stat 对象中的时间具有以下语义：

- atimeMs、 mtimeMs、 ctimeMs 和 birthtimeMs 属性是保存相应时间（以毫秒为单位）的数值。 它们的精度取决于平台。
- atime、 mtime、 ctime 和 birthtime 是对应时间的 Date 对象。二者没有关联.若改变值,其对应数值不改.
- atime "访问时间" - 上次访问文件数据的时间。由 mknod(2)、 utimes(2) 和 read(2) 系统调用更改。
- mtime "修改时间" - 上次修改文件数据的时间。由 mknod(2)、 utimes(2) 和 write(2) 系统调用更改。
- ctime "更改时间" - 上次更改文件状态（修改索引节点数据）的时间。由 chmod(2)、 chown(2)、 link(2)、 mknod(2)、 rename(2)、 unlink(2)、 utimes(2)、 read(2) 和 write(2) 系统调用更改。
- birthtime "创建时间" - 创建文件的时间。当创建文件时设置一次。 在不支持创建时间的文件系统上，该字段可能改为保存 ctime 或 1970-01-01T00:00Z（即 Unix 纪元时间戳 0）。 在这种情况下，该值可能大于 atime 或 mtime。 

# 函数之间的差异与使用场景 fs.readStream,fs.writeStream,fs.read,fs.write,fs.readFile,fs.writeFile
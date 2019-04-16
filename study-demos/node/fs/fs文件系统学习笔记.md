
|事件类型|定义|监听函数|触发|
|:--:|:--:|:--:|:--:|
|系统内置事件|内置定义|自定义|内置触发|
|自定义事件|自定义|自定义|代码触发|
# 函数 fs.watch(filename[, options][, listener])
- `filename <string> | <Buffer> | <URL>`

```
 options {
    persistent:true,//default 持续监听
    recursive:false,//监视子目录
    encoding:utf-8,//传给listener的编码
}
 ```
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
[fs.Stats的mode属性](fs系统的常量.md) 不太必要用到整个,有函数可以判断stats的类型
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

###  A Question:函数之间的差异与使用场景 fs.readStream,fs.writeStream,fs.read,fs.write,fs.readFile,fs.writeFile ?
##  node读取文件/目录函数
|函数名|参数|返回值|适用场景|
|:--|:--|:--|:--|
|fs.read|(fd, buffer, offset, length, position, callback)||传入文件描述符|
|fs.readSync|(fd, buffer, offset, length, position)||传入文件描述符|
|fs.readdir|(path[, options], callback)||读取目录|
|fs.readdirSync|(path[, options])||同步读取目录|
|fs.readFile|(path[, options], callback)||异步读取文件|
|fs.readFileSync|(path[, options])||同步读取文件|
|fs.readlink|(path[, options], callback)|??|link|
|fs.readlinkSync|(path[, options])|??|link|

# 函数 fs.readFile(path[, options], callback)
- `path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。`
- 
``` 
encoding <string> | <null> 默认值: null。
flag <string> 参阅支持的文件系统标志。默认值: 'r'。
```
- `(err,data<string> | <Buffer>)=>{}`
- fs.readFileSync()直接返回data
- 传入的路径为目录报错
- fs.readFile() 函数会缓冲整个文件。 为了最小化内存成本，尽可能通过 fs.createReadStream() 进行流式传输。
- 不传编码就返回一个Buffer,因为有很多文件如图片压缩包只能用Buffer返回.
```
fs.readFile('index.txt','utf8',(err,data)=>{
    console.log(data);//12345678
})

```

# 函数 fs.readdir(path[, options], callback)
- `path <string> | <Buffer> | <URL>`
```
注意,此选项为10.0.0新增内容,因为本机版本为8.9.0此选项无效
options <string> | <Object>

encoding <string> 默认值: 'utf8'。
withFileTypes <boolean> 默认值: false。
```
- `(err,files <string[]> | <Buffer[]> | <fs.Dirent[]>)=>{}`
- files 是目录中的文件名的数组（不包括 '.' 和 '..'）option.encoding指定文件名编码
- 如果 options.withFileTypes 设置为 true，则 files 数组将包含 fs.Dirent 对象。
- fs.readdirSync(path[, options]) 为其同步版本
```
fs.readdir('../fs/',(err,files)=>{
    console.log(files);
})
```
- 会把目录名称一起返回
```
[ 'createStream.js',
  'fs文件系统学习笔记.md',
  'index.js',
  'index.txt',
  'merge',//目录
  'read.js',
  'stat',//目录
  'test.txt',
  'watch'//目录
   ]
```

# 类 fs.Dirent 新增于: v10.10.0
- 使用 withFileTypes 选项设置为 true 调用 fs.readdir() 或 fs.readdirSync() 时，生成的数组将填充 fs.Dirent 对象

- dirent.isBlockDevice() boolean 是否为块设备
- dirent.isCharacterDevice() boolean 是否为字符设备
- dirent.isDirectory()  boolean  是否为目录
- dirent.isFIFO() boolean 是否为(FIFO)管道
- dirent.isFile() boolean 是否为文件
- dirent.isSocket() boolean 是否为套接字
- dirent.isSymbolicLink() boolean 是否为符号链接
- dirent.name 属性,返回文件名 string or buffer

# 类 fs.readStream(需要结合stream章节的知识使用)
- 由fs.ReadStream函数返回,实现了可读流接口.
### 事件 'close'
- 当 fs.ReadStream 的底层文件描述符已关闭时触发。
### 事件 'open'
- 参数为(fd)
- 当 fs.ReadStream 的文件描述符打开时触发。 
### 事件 'ready'
- 当 fs.ReadStream 准备好使用时触发。即'open'事件之后
### 属性 readStream.bytesRead
- number 到目前为止已读取的字节数
### 属性 readStream.path
- string or buffer 由 fs.createReadStream() 的第一个参数指定

# 类 fs.WriteStream
- 由fs.WriteStream函数返回,实现了可读流接口.
### 事件 'close'
- 当 fs.WriteStream 的底层文件描述符已关闭时触发。
### 事件 'open'
- 参数为(fd)
- 当 fs.WriteStream 的文件描述符打开时触发。 
### 事件 'ready'
- 当 fs.WriteStream 准备好使用时触发。即'open'事件之后
### 属性 writetream.bytesWritten
- number 到目前为止已读取的字节数
### 属性 writeStream.path
- string or buffer 由 fs.createWriteStream() 的第一个参数指定



# 类 fs.createReadStream(path[, options])
```
path <string> | <Buffer> | <URL>
options <string> | <Object>

    flags <string> 参阅支持的文件系统标志。默认值: 'r'。
    encoding <string> 默认值: null。
    fd <integer> 默认值: null。
    mode <integer> 默认值: 0o666。
    autoClose <boolean> 默认值: true。
    start <integer>
    end <integer> 默认值: Infinity。
    highWaterMark <integer> 默认值: 64 * 1024。
返回: <fs.ReadStream> 参阅可读流。
```
- 与可读流的 16 kb 的默认 highWaterMark 不同，此方法返回的流具有 64 kb 的默认 highWaterMark。(可缓冲的数据大小,对于普通的流， highWaterMark 指定了字节的总数。 对于对象模式的流， highWaterMark 指定了对象的总数。)
- 如果指定了 fd 并且 start 被省略或 undefined，则 fs.createReadStream() 从当前文件位置开始顺序读取。
- 如果指定了 fd，则 ReadStream 将忽略 path 参数并使用指定的文件描述符。 这意味着不会触发 'open' 事件。
- 如果 autoClose 为 false，则即使出现错误，也不会关闭文件描述符。 应用程序负责关闭它并确保没有文件描述符泄漏。 
- 如果 autoClose 设为 true（默认行为），则在 'error' 或 'end' 事件时将自动关闭文件描述符。
- mode 用于设置文件模式（权限和粘滞位），但仅限于创建文件的情况。
- 如果 options 是字符串，则它指定字符编码。

# 类 

# 函数 fs.createWriteStream(path[, options])
```
path <string> | <Buffer> | <URL>
options <string> | <Object>
    flags <string> 参阅支持的文件系统标志。默认值: 'w'。
    encoding <string> 默认值: 'utf8'。
    fd <integer> 默认值: null。
    mode <integer> 默认值: 0o666。
    autoClose <boolean> 默认值: true。
    start <integer>
返回: <fs.WriteStream> 参阅可写流。
```

- options 可以包括一个 start 选项，允许在文件开头之后的某个位置写入数据。
- 如果要修改文件而不是覆盖它，则 flags 模式需要为 r+ 模式而不是默认的 w 模式。
- 如果 autoClose 设置为 true（默认行为），则在 'error' 或 'finish' 事件时文件描述符会自动关闭。
- 如果 autoClose 为 false，则即使出现错误，也不会关闭文件描述符。 应用程序负责关闭它并确保没有文件描述符泄漏。
- 如果指定了 fd，则 WriteStream 将忽略 path 参数并使用指定的文件描述符。 这意味着不会触发 'open' 事件

# 函数 fs.appendFile(path, data[, options], callback)
```
path <string> | <Buffer> | <URL> | <number> 文件名或文件描述符。
data <string> | <Buffer>
options <Object> | <string>
    encoding <string> | <null> 默认值: 'utf8'。
    mode <integer> 默认值: 0o666。
    flag <string> 参阅支持的文件系统标志。默认值: 'a'。
callback <Function>
    err <Error>
```
- 同步版函数 fs.appendFileSync()
- 向text.txt添加了'hello ,3Q'
```
fs.appendFile('test.txt','hello ,3Q','utf8',(err)=>{
    console.log('succeed');
})

```
- 以下两种写法都会直接覆盖原文件的所有内容,暂时不知道用fd不用路径的时候怎么追加 
- 使用fs.write可以在指定位置添加
```
/*
var writeStream = fs.createWriteStream('test.txt',{flag:'w+',start:10},(err)=>{
   console.log(err);
}); 
*/

var writeStream = fs.createWriteStream('test.txt',(err)=>{
   console.log(err);
});

writeStream.on('open',(fd)=>{
   fs.appendFile(fd,'this is a writestream',(err)=>{
       console.log(err);
   })
})
```

# 函数 fs.copyFile(src, dest[, flags], callback)
```
src <string> | <Buffer> | <URL> 要拷贝的源文件名。
dest <string> | <Buffer> | <URL> 拷贝操作的目标文件名。
flags <number> 用于拷贝操作的修饰符。默认值: 0。
callback <Function>
```
- 异步地将 src 拷贝到 dest .同步版 fs.copyFileSync(src, dest[, flags])
- 默认情况下，如果 dest 已经存在，则覆盖它。 除了可能的异常，回调函数没有其他参数。
- flags 是一个可选的整数，指定拷贝操作的行为。 可以创建由两个或更多个值按位或组成的掩码（比如 fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE）
- fs.constants.COPYFILE_EXCL - 如果 dest 已存在，则拷贝操作将失败。
- fs.constants.COPYFILE_FICLONE - 拷贝操作将尝试创建写时拷贝（copy-on-write）链接。如果平台不支持写时拷贝，则使用后备的拷贝机制。
 fs.constants.COPYFILE_FICLONE_FORCE - 拷贝操作将尝试创建写时拷贝链接。如果平台不支持写时拷贝，则拷贝操作将失败。
 - 将index.txt的内容拷贝到index.js,当index.js不存在时创建一个文件
 ```
 fs.copyFile('index.txt','index.js',((err)=>{
   if(err){
      throw err;
   }
}));
 ```
 - 拷贝文件夹报错
 ```
 /*
 Error: EPERM: operation not permitted, copyfile 'C:\Users\llxla\git\codes\study-demos\node\fs\merge' -> 'C:\Users\llxla\git\codes\study-demos\node\fs\merge2'
 */
 fs.copyFile('./merge/','./merge2',((err)=>{
   if(err){
      throw err;
   }
}));
 ```

 # 函数 fs.mkdir(path[, options], callback)
 - 异步地创建目录 同步版 fs.mkdirSync(path[, options])
 ```
path <string> | <Buffer> | <URL>
options <Object> | <integer>  v10.0.0新增
    recursive <boolean> 默认值: false。
    mode <integer> Windows 上不支持。默认值: 0o777。
callback <Function>
err <Error>
```
- 可选的 options 参数可以是指定模式（权限和粘滞位）的整数，也可以是具有 mode 属性和 recursive 属性（指示是否应创建父文件夹）的对象。
- 为了兼容10.0.0之前的目录,应该一级一级的创建目录
- 创建一个tmp目录
```
fs.mkdir('tmp',(err)=>{
   if(err){
      throw err;
   }
})
```

# 函数 fs.unlink(path, callback)
- 异步地删除文件或符号链接 同步版fs.unlinkSync(path)
- fs.unlink() 不能用于目录
```
fs.unlink('1.jpg',(err)=>{
   if(err){
      console.log(err);
   }
});
/*
用于目录则报错
Error: EPERM: operation not permitted, 
*/
```
# 函数 fs.rmdir(path, callback)
- 异步地删除文件夹  同步版 fs.rmdirSync(path)
```
fs.rmdir('tmp',(err)=>{
   if(err){
      throw err;
   }
})
```
# 函数 fs.rename(oldPath, newPath, callback)
- 异步地将 oldPath 上的文件重命名为 newPath 提供的路径名。 如果 newPath 已存在，则覆盖它
-更改名字时文件和目录都可用,如果newPath已存在,path==文件名?覆盖,path==目录名?报错.(operation not permitted)
```
fs.rename('tmp-2','tmp-3',(err)=>{
   if(err){
      throw err;
   }
})

fs.rename('tmp-3/tmp.txt','tmp-3/tmp-3.txt',(err)=>{
   if(err){
      throw err;
   }
})

```

# 函数 fs.open(path, flags[, mode], callback)
异步地打开文件。参阅 open
```
path <string> | <Buffer> | <URL>
flags <string> | <number> 参阅支持的文件系统标志。
mode <integer> 默认值: 0o666（可读写）。
callback <Function>
    err <Error>
    fd <integer>
```
- [flag的标记](fs系统的常量.md)

[文件系统的常量](fs系统的常量.md)
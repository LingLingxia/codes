
|事件类型|定义|监听函数|触发|
|:--:|:--:|:--:|:--:|
|系统内置事件|内置定义|自定义|内置触发|
|自定义事件|自定义|自定义|代码触发|
# 函数 fs.watch(filename[, options][, listener])

# 类 fs.FSWatcher 
-  fs.watch()方法返回
- 所有 fs.FSWatcher 对象都是 EventEmitter 的实例，每当修改指定监视的文件，就会触发 'change' 事件。


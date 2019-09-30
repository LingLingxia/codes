模块的导出与引用方式
## 1  整个输出为函数

output.js
```
module.exports = function(){
  console.log('success');
}
```


input.js
```
const output = require('./output');
output();
```

## 2 添加某个属性为函数

output.js
```
module.exports.success = function(){
  console.log('success');
}
```

output2.js
```
exports.success = function(){
  console.log('success');
}
```

input.js
```
const output = require('./output');
output.success();
```

input2.js
```
const {success} = require('./output');
success();
```

## 3

# 类 module

- 模块封装器
```
(function(exports, require, module, __filename, __dirname) {
// 模块的代码实际上在这里
});
```
### exports 和 module.exports
- exports 变量是在模块的文件级作用域内可用的，且在模块执行之前赋值给 module.exports。

- 它允许使用快捷方式，因此 module.exports.f = ... 可以更简洁地写成 exports.f = ...。 但是，就像任何变量一样，如果为 exports 赋予了新值，则它将不再绑定到 module.exports;
- 当 module.exports 属性被新对象完全替换时，通常也会重新赋值 exports
- 总结一下，可以使用 `exports.属性名 = XXX`,不可以使用  `exports = XXX` 完全重写exports对象。


### 和 es6 模块的区别
- es6是编译时引入，node是运行时引入
- 以下代码输出的对象中含有abc三个属性
```
export var a = 1;
export var b = 2;
var c = 3;
export {
  c
}
```
- es6在webpack中按需引入 ,require是引入了整个模块。
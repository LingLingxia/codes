# proxy
## 基础用法
```
var obj = new Proxy({},{//没写属性名，这个写法代理对象上所有的属性
  get:function(target,key,receiver){
    console.log(`getting ${key}`);
    //console.log(target,key,receiver); 加上就报错
    return Reflect.get(target,key,receiver);//为什么要用get函数，直接返回target[key]不行吗
  },
  set:function(target,key,value,receiver){
    console.log(`setting ${key}`);
    return Reflect.set(target,key,value,receiver);
  }
})
obj.count = 1;
obj.count++;
```


## 
```
var handler = {
  get: function(target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function(target, thisBinding, args) {
    return args[0];
  },

  construct: function(target, args) {
    return {value: args[1]};
  }
};

var fproxy = new Proxy(function(x, y) {
  return x + y;
}, handler);

fproxy(1, 2) // 1
new fproxy(1, 2) // {value: 2}   //调用construce
fproxy.prototype === Object.prototype // true
fproxy.foo === "Hello, foo" // true
```
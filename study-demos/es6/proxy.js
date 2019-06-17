var obj = new Proxy({},{
    get:function(target,key,receiver){
        console.log(`getting ${key}!`);
        return Reflect.get(target,key,receiver);
    },
    set:function(target,key,value,receiver){
        console.log(`setting ${key}!`);
        return Reflect.set(target,key,value,receiver);
    }
})

obj.count = 1;
obj.count++;

var proxy = new Proxy({},{
    get:function(){
        return 35;
    }
});
console.log(proxy.name);

let proxyObj = Object.create(proxy);
console.log(proxyObj.age,proxyObj.name);//因为这个对象它自己没有定义get函数的代理,所以就找到原型上面去了 ,这个解答错误
//obj对象本身并没有time属性，所以根据原型链，会在proxy对象上读取该属性，导致被拦截。
console.log('handler section');

var handler = {
    //函数的第一个值都是target,从第二个值开始,是被拦截函数的参数传递
    //target是被拦截的对象吗?是源对象
    get:function(target,name){
        if(name==='prototype'){
            return Object.prototype;
        }
       return 'hello'+name;
    },
    apply:function(target,thisBindings,arg){
      // return arg[0];//也就是说,这里并不会调用apply函数原来的实现.
      return Reflect.apply(target,thisBindings,arg);
    },//这个单词不要写错了
    construct:function(target,args){
      return  Reflect.construct(target,args); // 用了new之后, 返回新构造的对象
       // return {value:args[1]};
    }
}
var fproxy = new Proxy(function(x,y){
    this.x = x;
    return x+y;
},handler);

console.log(fproxy(1,2));//这里调用apply???
console.log(new fproxy(1, 2))//有  new 才会调用constructor 
console.log(fproxy.prototype === Object.prototype);
console.log(fproxy.name ==='helloname');
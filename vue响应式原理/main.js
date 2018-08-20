//watcher
//selfValue exp cb
function Watcher(vm, exp, cb) {
    //用作构造函数     这里的this是指Watcher的实例
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get();  // 将自己添加到订阅器的操作

    //本watcher的value被赋值为  vm.value
}
 //难道这个是订阅者
Watcher.prototype = {
    update: function() {
        this.run();
    },
    run: function() {
        //获取现在的值
        var value = this.vm.data[this.exp];
        //获取以前的值
        var oldVal = this.value;
        if (value !== oldVal) {//如果不相等
            //更新这个watcher的值 以value oldVal 做参数执行函数cb
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    get: function() {//这个get只在构造函数使用
        //这个Dep是做什么的 是不是全局的变量
        Dep.target = this;  // 缓存自己
        var value = this.vm.data[this.exp]  // 强制执行监听器里的get函数  获取exp的值
        Dep.target = null;  // 释放自己
        return value;
    }
};

function Dep () {
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },
    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update(); //执行update订阅者的函数
        });
    }
};

//observer 观察者
function defineReactive(data, key, val) {

    observe(val); // 递归遍历所有子属性

    //先不看递归分析 此函数
    //data 定义一个新属性 key 值为val
    var dep = new Dep(); //函数里面的局部变量
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            //每次获取这个值的时候，判断是否需要添加订阅者  (可是target为什么是一个全局的呢，这样如何绑定属性和订阅者的关系)
            //因为每次绑定完会立刻执行get函数，划重点 js是单线程，可以这么干
            if (Dep.target) { // 判断是否需要添加订阅者
                dep.addSub(Dep.target); // 在这里添加一个订阅者  一个watcher的实例
            }
            return val;
        },
        set: function(newVal) {
            //每次设置这个值的时候,
            //通知
            if (val === newVal) {
                return;
            }
            val = newVal;
            console.log('属性' + key + '已经被监听了，现在值为：“' + newVal.toString() + '”');
            dep.notify(); // 如果数据变化，通知所有订阅者
        }
    });
}
Dep.target = null;



function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    Object.keys(data).forEach(function(key) {
        defineReactive(data, key, data[key]);
    });
};
 

// 关联
function SelfVue (data, el, exp) {
    var self=this;
    this.data = data;//这是一个data对象  exp是data里面的一个key
    
    Object.keys(data).forEach(function(key){
        self.proxyKeys(key);
    })
    observe(data);
    
    el.innerHTML = this.data[exp];  // 初始化模板数据的值
    new Watcher(this, exp, function (value) {
        el.innerHTML = value;//回调函数?
    });
    return this;
}

SelfVue.prototype.proxyKeys=function(key){
    var self=this;//调用对象
    Object.defineProperty(this,key,{
        enumerable:false,
        configurable:true,
        get(){
            return self.data[key];
        },
        set(newVal){
            self.data[key]=newVal;
        }
    })
}

//使用
var ele = document.querySelector('#name');
var selfVue = new SelfVue({
    name: 'hello world'
}, ele, 'name');

window.setTimeout(function () {
    console.log('name值改变了');
    selfVue.name = 'canfoo';
}, 2000);


//订阅者的功能，每一次  对每一个属性添加一个函数,储存旧值 
function Watcher(vm,exp,cb){
    this.cb=cb;
    this.vm=vm;
    this.exp=exp;
    this.value=this.get();
}


Watcher.prototype={
    update:function(){
        this.run();
    },
    run:function(){
        var value=this.vm.data[this.exp];
        var oldVal=this.value;
        if(value!==oldVal){
            this.value=value;
            this.cb.call(this.vm,value,oldVal);
        }
    },
    get:function(){
        Dep.target=this;
        //每次新建一个watcher就要监听它的关联数据
        var value=this.vm.data[this.exp];
        Dep.target=null;
        return value;
    }
};


function Dep(){
    this.subs=[];
}
//观察者的功能   存储订阅者，通知订阅者 ,
Dep.prototype={
    addSub:function(sub){
        this.subs.push(sub);
    },
    notify:function(){
        this.subs.forEach(element => {
            element.update();//原来这是一个watcher
        });
    }
}

function observe(data){
     
   if(!data||typeof data!=='object') return ;
   Object.keys(data).forEach(key=>{
       defineReactive(data ,key, data[key]);
   });

}

function defineReactive(data,key,val){
    var dep=new Dep();
     observe(val);
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get(){
            if(Dep.target){
                dep.addSub(Dep.target);
            }
            return val;
        },
        set(newval){
            if(newval===val) return ;

            val=newval;
            dep.notify();
        }
    });
}

Dep.target=null;
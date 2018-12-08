function Subscriber(vm,exp,cb){
        this.cb=cb;
        this.exp=exp;
        this.vm=vm;

        sub.target=this;
        this.value=this.vm.data[exp];
        sub.target=null;

        return this;
}

Subscriber.prototype.update=function(){
       var newValue = this.vm.data[this.exp];
       if(newValue!=this.value){
           var oldValue=this.value;
           this.value=newValue;
           this.cb.call(this,newValue,oldValue);
       }
}

function sub(){
    this.subs=[];
}

sub.prototype.addSub=function(s){
    this.subs.push(s);
}

sub.prototype.notify=function(){
    for(var i=0;i<this.subs.length;i++){
        this.subs[i].update();

    }
}

sub.prototype.addSub=function(t){
    this.subs.push(t);
}

sub.target=null;

function  defineReactive(obj,i,val){
    if(typeof obj[i] =='object'){
        observe(obj[i]);
         return ;
    }

    var s=new sub();
     Object.defineProperty(obj,i,{
        enumerable:true,
        configurable:true,
        get(){
            if(sub.target){
                s.addSub(sub.target);

            }
            return val;
        },
        set(newV){

            if(val!==newV){
                val=newV;
                s.notify();
            }
        }
     });
}


function observe(obj){
    if(obj==null||typeof obj !='object') return ;
    for(var i in obj){
        defineReactive(obj,i,obj[i]);
    }
}


function selfVue(config){
    for(var i in config){
        this[i]=config[i];
    }
    new Compile(this);
    return this;
}

function Compile(vm){
    this.el=document.querySelector(vm.el);
    this.vm=vm;
    this.fragment=null;
    this.init();
}
Compile.prototype={
    init(){
        this.fragment=document.createDocumentFragment();
        var child=this.el.firstChild;
        while(child){
            this.fragment.append(child);
            child=this.el.firstChild;
        }
        this.compileNode(this.fragment)
        this.el.append(this.fragment);
    },
    compileNode(node){
     var self=this;
     Array.prototype.forEach.call(node.childNodes,function(item,index){

         if(item.nodeType==1){//元素节点
            self.compileElementNode(item);
         }else if(item.nodeType==3){//文本节点
            self.compileTextNode(item);
         }
         if(item.childNodes&&item.childNodes.length){
            self.compileNode(item);      
         }
     })   
    },
    compileElementNode(node){
        var self=this;
        Array.prototype.forEach.call(node.attributes,function(item,index){
                if(item.name=='v-html'){
                    self.updateView(node,self.vm.data[item.value]);
                    new Subscriber(self.vm,item.value,function(newV){
                        self.updateView(node,newV);
                   });
                }
        }); 
    },
    compileTextNode(node){
        var reg=/\{\{(.+?)\}\}/;
        var matches=reg.exec(node.nodeValue);
        var self=this;
        if(matches){

            self.updateView(node,self.vm.data[matches[1]]);
            new Subscriber(this.vm,matches[1],function(newV){
                 self.updateView(node,newV);
            });
        }
    },
    updateView(node,value){
        node.textContent=value;
    }

}

new selfVue({
    el:'#app',
    data:{
        name:'hello world',
        age:14
    },
    method:{
        sayHello(){
            alert('hello!');
        }
    },
});
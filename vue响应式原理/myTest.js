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


function selfVue(data,el,exp){
    this.data=data;
    observe(data);
    el.innerHTML=this.data[exp];
  new  Subscriber(this,exp,function(val){
       el.innerHTML=val;
    })

}
var ele=document.getElementById('name');

var sv= new selfVue({name:'hello world'},ele,'name');

setTimeout(() => {
    sv.data.name='llx';
}, 0);
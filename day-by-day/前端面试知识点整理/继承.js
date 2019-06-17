
//这个文件需要重复写,经常忘记写prototype,直接把函数定义在构造函数上,还忘记写constructor
//组合继承

function Parent(value){
    this.value = value;
}

Parent.prototype.getValue = function(){
    console.log(this.value);
}

function Child(value){
    Parent.call(this,value);
}
Child.prototype = new Parent();

let child = new Child(1);
child.getValue();//1



//寄生组合继承




function Parent2 (name){
    this.name = name;
}
Parent2.prototype.sayName = function(){
    console.log(this.name);
}

function Child2(name,age){
   Parent2.call(this,name);
   this.age = age;
}

//创建了一个对象,这个对象的 原型指向  Parent2.prototype,但是需要修改它的constructor,
Child2.prototype = Object.create(Parent2.prototype,{
    constructor:{
        value:Child2,
        enumerable:false,
        writable:true,
        configurable:true
    }
});
Child2.prototype.sayAge = function(){
    console.log(this.age);
}

let child2 = new Child2(2,5);
child2.sayName();//2
child2.sayAge();//5
let parent2 = new Parent2('parent');
parent2.sayAge();



//class继承  class要小写

class Parent3{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(this.name)
    }
}


class Child3 extends Parent3{
    constructor(name,age){
        super(name);
        this.age = age;
    }
    sayAge(){
        console.log(this.age);
    }
}

let  child3 = new Child3('name',24);
child3.sayName();
child3.sayAge();

//在浏览器中  child2 的sayName和sayAge是亮的,child3的两个函数是灰色的,初步怀疑是enumerable导致的, 
//他们的层级是一样的.都是有两层,  sayAge constructor 在第一层,   sayName在第二层
//浏览器可以区分一个constructor是函数还是类

Object.getPrototypeOf(Child) === Parent   //true
Child.prototype === Parent //false
Parent.prototype === Object.getPrototypeOf(Child.prototype)//true
Parent.prototype === Child.prototype.__proto__//true
//因为Child.prototype是由Parent.prototype构造出来的对象

// （1）子类的__proto__属性，表示构造函数的继承，总是指向父类。

// （2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
Child.__proto__ === Parent // true
Child.prototype.__proto__ === Parent.prototype // true

'------------------------------defineProperty测试-------------------------------------------------------------------'

//defineProperty测试
var person = {};
Object.defineProperty(person,'name',{
    value:'Nicholas'
});



//enumerable为false的属性不能被for i 和Object.keys   Object.value所遍历到
//默认   configurable,enumerable



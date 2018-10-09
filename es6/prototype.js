// function Parent(name){
//     this.name=name;
// }
// Parent.prototype.sayName=function(){
//     console.log(this.name);
// }

// var p=new Parent('llx');
// p.sayName();

// function Sub(name,age){
//     Parent.call(this,name);
//     this.age=age;
// }
// Sub.prototype=Object.create(Parent.prototype,{
//         sayAge:{
//             value:function(){
//                 console.log(this.age);
//             },
//             enumerable:false,
//             configurable:false,
//             writable:false
//         }
// });

// var s=new Sub('llx2',23);
// s.sayName();
// s.sayAge();


class Parent{
    constructor(name){
        this.name=name;
    }
    sayName(){
        console.log(this.name);
    }
}

class Sub extends Parent{
    constructor(name,age){
        super(name);
        this.age=age;
    }
    sayAge(){
        console.log(this.age);
    }
}

var s=new Sub('llx2',23);
s.sayName();
s.sayAge();

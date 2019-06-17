class A {
    static hello() {
      console.log('hello world');
    }
  }
  
  class B extends A {
  }
  
  B.hello()  // hello world

  console.log(B);
  console.log(B.prototype instanceof A);//true


// class A {
//     p() {
//       return 2;
//     }
//   }
  
//   class B extends A {
//     constructor() {
//       super();//super代表的就是A这个类.
//       console.log(super.p()); // 2
//     }
//   }
  
//   let b = new B();

console.log('-------------------------get and set------------------------------------')
//存值函数和取值函数是设置在属性的 Descriptor 对象上的。
class MyClass{
    constructor(name){
        this.__name__ = 'my name is ' + name;
    }

    get name(){
      return  this.__name__;
    }

    set name(value){
      this.__name__ = 'my name is ' + value;
    }
}

let myclass = new MyClass('lalala');
console.log(myclass.name);
myclass.name= 'hahaha';
console.log(myclass.name);


console.log('-------------------------static------------------------------------');
class Parent{
  constructor(name){
    this.value = name;
  }
  static arr = [1,2,3];
  static sayArray(){
    console.log(this.arr);
  }
   sayHello(){
     console.log('hello');
   }
}

Parent.staticProperty = 'I am static property';
let parent = new Parent('my name');
console.log(parent);

class Child extends Parent{
  constructor(value){
    super(value);
  }

  static sayChildArray(){
    super.sayArray();//static 里面只能调用静态方法,否则报错
    console.log('sayChildArray',super.staticProperty);//sayChildArray ,I am static property
  }

  sayChildHello(){
    super.sayHello();
    console.log('sayHello',super.staticProperty);//sayHello ,undefined
  }

} 
Child.sayArray();//[1,2,3]
Child.arr.push(888);//4,好像返回了长度
let child = new Child('hihihi');
Child.sayChildArray();//[1,2,3,888]
child.sayChildHello();//hello 在子类里面,super总是代表父类,实例函数可以调用父类实例函数,.静态可以调用
console.log(Parent.arr===Child.arr);//true


//对于static属性,子类的Child对象(请注意,这里不是Child.property,否则实例也可以访问了,这是不对的)浅复制了一份父元素上的static property  .所以arr共享,staticProperty不共享
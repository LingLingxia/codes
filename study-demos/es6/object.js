//简写的对象方法不能用作构造函数，会报错

const obj = {
  f() {
    this.foo = 'bar';
  }
};

//new obj.f() // 报错

//目前，有四个操作会忽略enumerable为false的属性。
//for...in循环：只遍历对象自身的和继承的可枚举的属性。
// Object.keys()：返回对象自身的所有可枚举的属性的键名。
// JSON.stringify()：只串行化对象自身的可枚举的属性。
// Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

var child = {
  name:'name1',
  getAge(){
    console.log(super.age,this.age);
  }
},parent = { age:25}
Object.setPrototypeOf(child,parent);
child.getAge();

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x,y,z);


const o = Object.create({ xx: 1, y2: 2 });
o.z = 3;


//变量x是单纯的解构赋值，所以可以读取对象o继承的属性；变量y和z是扩展运算符的解构赋值，只能读取对象o自身的属性，所以变量z可以赋值成功，变量y取不到值。
let { xx, ...newObj } = o;
let { y2, zz } = newObj;
xx // 1
y2 // undefined
zz // 3

//变量声明语句之中，如果使用解构赋值，扩展运算符后面必须是一个变量名，而不能是一个解构赋值表达式，
//所以上面代码引入了中间变量newObj，如果写成下面这样会报错。
//let { x, ...{ y, z } } = o;

//Object.is(); 和 === 的区别
//不同之处只有两个：一是+0不等于-0，二是NaN等于自身。

Object.getOwnPropertyDescriptors
Object.getOwnPropertyNames
Object.getOwnPropertySymbols
Object.setPrototypeOf
Object.defineProperties
Object.getOwnPropertyDescriptors

var pro = {
  name:'lll'
}
// Object.create 第一个参数是原型对象，第二个参数是描述对象，enumerable：默认是false。
var source = { age:233 }
//var newObj2 = Object.create(pro,{age:{value:233,enumerable:true}});
var newObj2 = Object.create(pro,Object.getOwnPropertyDescriptors(source));
console.log(newObj2,newObj2.name,newObj2.age);

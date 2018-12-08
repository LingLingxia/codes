// class Student {
//   fullName:string;
//   constructor(public firstName ,public middleInitial, public lastName){
//     this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }
// }
// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function  greeter (person :Person){
//   return "hello" + person.firstName + person.lastName;
// }

// let user = new Student("Jane","M.","User");
// console.log(user);
// console.log(greeter(user));

//有没有使用是不管的，但是接口定义了几个属性，传入的对象就应该有几个属性。、

// let x: [string, number];
// x = ['hello',3];


// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;


// let someValue: any = "this is a string";

// let strLength: number = (someValue as string).length;

// interface labelledobj{
//   label:string;
// }
// function printLabel(labelledobj:labelledobj){
//   console.log(labelledobj.label);
// }

// let myObj = { size:10, label: 'size 10 Object'};
// printLabel(myObj);


// interface SquareConfig{
//   color?:string;
//   width?:number;
// };

// function createSquare(config:SquareConfig) :{color:String; area: number} {
//   let newSquare = {
//     color :"white",area:100
//   }
//   if(config.color){
//     newSquare.color = config.color;
//   }
//   if(config.width){
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({color:'blue',width:3});
// console.log(mySquare);

// interface SearchFunc {
//   (source: string ,subString:string):boolean;
// }

// let mySearch : SearchFunc = function(so:string, su:string){
//   return so.search(su)>-1;
// }


// interface StringArray{
//   [index:number]:string;
// }
// let myArray:StringArray = ["Bob","Fred"];


// class Animal {
//   name: string;
// }
// class Dog extends Animal {
//   breed: string;
// }

// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//   [x: string]: Animal;
//   [x: number]: Dog;
// }

// interface NumberDictionary {
//   [index: string]: number;
//   length: number;    // 可以，length是number类型
//   name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
// }

// interface NumberDictionary{
//   readonly [index:number]:string;
// }


//说明所有的索引都是只读属性 和对象的只读没有区别
// interface ReadonlyStringArray {
//   readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[0] = "Mallory"; // error!

// interface a{
//   readonly name:string;
// }
// let b:a = {name:'llx'};
// b.name = 'lzh'; 






//分割线-----------------------------------------------
//这里很奇怪值得反复思考

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}


//这让我困惑，因为DigitalClock和AnalogClock并不是 ClockConstructor类型的。
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
//分割线-----------------------------------------------

interface Shape{
  color:string;
}
interface Square extends Shape{
  sideLength:number;
}
let square = <Square>{};//这是神马意思哦
square.color = "blue";
square.sideLength = 10;


interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
//同事作为一个对象和函数使用。很难理解
function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
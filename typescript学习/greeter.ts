// interface SquareConfig {
//     color: string;
//     width: number;
//   }
  
//   function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = {color: "white", area: 100};
//     if (config.clor) {
//       // Error: Property 'clor' does not exist on type 'SquareConfig'
//       newSquare.color = config.clor;
//     }
//     if (config.width) {
//       newSquare.area = config.width * config.width;
//     }
//     return newSquare;
//   }
  
//   let mySquare = createSquare({color: "black"});

//interface 定义的类,只能从这个字段里面去选,而直接用对象的,可以包含它没有定义的类,很奇怪,直接写在参数就报错,引用就不报错
//因为参数里面的值是被限定的,而myObj没有被接口限定,详情见后面.


// interface LabelledValue {
//     label: string;
//   }
  
//   function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
//   }
  
//   let myObj = {size: 10, label: "Size 10 Object"};
//   printLabel(myObj);

// interface Point{
//     readonly x:number;
//     readonly y:number;
// }
// let p1:Point = {x:10,y:20};

// interface ClockConstructor {
//     new (hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

//传入一个构造函数和 两个参数,返回一个clockInterface 
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
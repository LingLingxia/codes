//本文件用来验证clone.ts中的猜想  删掉ClockInterface

//这个类型的函数的构造函数必须有两个number   它可以作为一个接口限定类型，但是无法继承。
interface ClockConstructor{
  new (hour:number,minute:number)
}

//定义了一个接口ClockSonstructor 实现这个接口的时候必须有构造函数 ,参数为hour 和minute 返回值为 clockInterface


//这个接口需要有一个tick函数?

function createClock(ctor:ClockConstructor,hour:number,minute:number) {
   return new ctor(hour,minute);
}

//这个类继承自ClockInterface 所以它需要有一个tick函数
class AClock {
  constructor(h:number,m:number) {}
  tick(){
    console.log(' i am a clock');
  }

}

class BClock {
  constructor(h:number,m:number) {}
  tick(){
    console.log(' i am b clock');
  }

}

var  digital2 = createClock(AClock, 12, 17);
var analog2 = createClock(BClock, 7, 32);
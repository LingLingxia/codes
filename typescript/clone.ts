//类名、接口名=大驼峰| 函数 小驼峰

//这个例子把问题搞复杂了，这个类不需要继承ClockConstructor 只需要它的构造函数合法，就可以通过验证。我们可以把所有ClockInterface相关的都删掉
//这个类型的函数的构造函数必须有两个number   它可以作为一个接口限定类型，但是无法继承。
interface ClockConstructor{
  new (hour:number,minute:number) : ClockInterface
}

//定义了一个接口ClockSonstructor 实现这个接口的时候必须有构造函数 ,参数为hour 和minute 返回值为 clockInterface

interface ClockInterface{
   tick();
}
//这个接口需要有一个tick函数?

function createClock(ctor:ClockConstructor,hour:number,minute:number): ClockInterface {
   return new ctor(hour,minute);
}

//这个类继承自ClockInterface 所以它需要有一个tick函数
class AClock implements ClockInterface{
  constructor(h:number,m:number) {}
  tick(){
    console.log(' i am a clock');
  }

}

class BClock implements ClockInterface{
  constructor(h:number,m:number) {}
  tick(){
    console.log(' i am b clock');
  }

}

var  digital2 = createClock(AClock, 12, 17);
var analog2 = createClock(BClock, 7, 32);
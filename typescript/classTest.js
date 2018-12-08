//本文件用来验证clone.ts中的猜想  删掉ClockInterface
//定义了一个接口ClockSonstructor 实现这个接口的时候必须有构造函数 ,参数为hour 和minute 返回值为 clockInterface
//这个接口需要有一个tick函数?
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
//这个类继承自ClockInterface 所以它需要有一个tick函数
var AClock = /** @class */ (function () {
    function AClock(h, m) {
    }
    AClock.prototype.tick = function () {
        console.log(' i am a clock');
    };
    return AClock;
}());
var BClock = /** @class */ (function () {
    function BClock(h, m) {
    }
    BClock.prototype.tick = function () {
        console.log(' i am b clock');
    };
    return BClock;
}());
var digital2 = createClock(AClock, 12, 17);
var analog2 = createClock(BClock, 7, 32);

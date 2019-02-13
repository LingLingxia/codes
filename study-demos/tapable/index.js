const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook 
} = require("tapable");

class Car{
  constructor(){
          this.hooks = {
              accelerate:new SyncHook(['newSpeede']),
              brake:new SyncHook(),
              calculateRoutes:
              new AsyncParallelHook(['source','target','routesList'])
          }
      }
  
      setSpeed(newSpeed){
        this.hooks.accelerate.call(newSpeed);
      }

      useNavigationSystemPromise(source, target){
        const routesList = new List();
      }

      useNavigationSystemAsync(source, target, callback) {
        const routesList = new List();
        this.hooks.calculateRoutes.callAsync(source, target, routesList, err => {
            if(err) return callback(err);
            callback(null, routesList.getRoutes());
        });
    }

}

const myCar = new Car();
//tap是消费者，注册函数。
myCar.hooks.brake.tap('WaringLampPlugin',()=>warningLalmp.on());
myCar.hooks.accelerate.tap('loggerPlugin',newSpeed=>console.log(`accelerate to ${newSpeed}`));
console.log('ok');
myCar.setSpeed('100m');
myCar.hooks.accelerate.call('800m');


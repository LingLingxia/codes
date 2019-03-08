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
  
  //这是一个事件注册发布机制
  //一个类,它可以不继承tapable,它需要定义钩子,并且(根据钩子的注册类型)调用钩子,钩子的注册在类之外的地方进行,
  //在调用之前即可

  class Car{
    constructor(){
            this.hooks = {
                SyncTestOne:new SyncHook(['param1']),
                SyncTestTwo:new SyncHook(),
                SyncBailTestOne:new SyncBailHook(['param1']),
                AsyncParalleTestOne:new AsyncParallelHook(['param1','param2']),
                AsyncSeriesTestOne:new AsyncSeriesHook(['param1'])
            }
            this.name = 'a-tapable',
            this.age = '23'
        }

        callSyncTestOne(){
            this.hooks.SyncTestOne.call(this.name);
        }

        callAsyncParalleTestOne(){
            this.hooks.AsyncParalleTestOne.callAsync(this.name,this.age,
                callbackParam=>{
                console.log(`a asynchook ${callbackParam}`);
            });
        }


        callAsyncSeriesTestOne(){
            myCar.hooks.AsyncSeriesTestOne.callAsync(2,()=>{});
        }
    
  }

  var myCar = new Car();
  myCar.hooks.SyncTestOne.tap('a-hook-name',(param1)=>{
      console.log(`my first hooks called ${param1}`);
  });

   myCar.callSyncTestOne();
  //   myCar.hooks.SyncTestOne.call('8888');
  
  
  //测试调用顺序 , 按顺序调用，各自完成。 paraller 平行调用
    //   myCar.hooks.AsyncParalleTestOne.tapAsync('a-hook-name',(param1,param2,cb)=>{
    //       console.log('第一次注册')
    //       setTimeout(() => {
    //           console.log('一秒钟之后输出这句话,并且给回调函数传参'+param1 + param2);
    //           cb('回调函数调用');
    //       }, 1000);
    //   });
    
    //   myCar.hooks.AsyncParalleTestOne.tapAsync('a-hook-name',(param1,param2,cb)=>{
    //     console.log('第二次注册')
    //     setTimeout(() => {
    //         console.log('一秒钟之后输出这句话,并且给回调函数传参2'+param1 + param2);
    //         cb('回调函数调用2');
    //     }, 100);
    // })
    // myCar.callAsyncParalleTestOne();

    //测试调用顺序，按注册顺序调用，依次完成


    // myCar.hooks.AsyncSeriesTestOne.tapAsync('a-hook-name',(param1,cb)=>{
    //    console.log('series one');
    //    setTimeout(()=>{
    //        console.log('series one 回调');
    //        cb();
    //    },1000);
    // })

    // myCar.hooks.AsyncSeriesTestOne.tapAsync('a-hook-name',(param1,cb)=>{
    //    console.log('series two');
    //    setTimeout(()=>{
    //        console.log('series two 回调');
    //       cb();
    //    },100);
    // })
    
    // myCar.hooks.AsyncSeriesTestOne.tap('a-hook-name',(param)=>{
    //     console.log('series -----one tap');
    // })
    // myCar.callAsyncSeriesTestOne();
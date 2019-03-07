function FileListPlugin(options){}
FileListPlugin.prototype.apply = function(compiler){

  
//   compiler.hooks.environment.tap('environment',function(){
//     //无参数  1
//     debugger;
//     //调用了，看起来没啥用;
// })

// compiler.hooks.afterEnvironment.tap('afterEnvironment',function(){
//   //无参数 2
//     debugger;
//     //调用了，看起来没啥用;
// })

//   compiler.hooks.entryOption.tap('entryOption',function(entry){
//     debugger;
//      //entry:string  运行目录  3
//      //
//   });

//   compiler.hooks.afterPlugins.tap('afterPlugins',function(c){
//     debugger;
//     //compiler  4

//    // console.log(compilerrr instanceof compiler);
//   })

//   compiler.hooks.afterResolvers.tap('afterResolvers',function(c){
//     //compiler 5
//      debugger;
//   })



//   compiler.hooks.beforeRun.tap('beforeRun',function(c){
//      debugger;
//      //compiler 6
//      console.log(c==compiler);
//   });

//   compiler.hooks.run.tap('run',function(c){
//     debugger;
//     //compiler 7
//     console.log(c==compiler);
//  });

//   compiler.hooks.normalModuleFactory.tap('normalModuleFactory',function(normalModuleFactory){
//     // normalModuleFactory 8
//     debugger;

// });

// compiler.hooks.contextModuleFactory.tap('contextModuleFactory',function(contextModuleFactory){
//   // normalModuleFactory 9
//   debugger;
 
// });

// compiler.hooks.beforeCompile.tap('beforeCompile',function(compilationParams){
//   debugger;
//   // compilationParams 由一些自有依赖和上面的 normalModuleFactory ,contextModuleFactory构成。 10
//   //编译参数创建之后执行。
// });

compiler.hooks.compile.tap('compile',function(compilationParams){
  debugger;
   //一个新的编译创建之后执行。在有devserver的情况下应该会起作用。 11
   //compilation的钩子在这里之后将不再生效
});


compiler.hooks.thisCompilation.tap('thisCompilation',function(compilation){
  debugger;
   //一个新的编译创建之后执行。在有devserver的情况下应该会起作用。 12
});

compiler.hooks.compilation.tap('compilation',function(compilation){ 
  debugger;
   //编译创建之后执行。需要再devserver的情况下验证和compile的关系 13
});

compiler.hooks.make.tap('make',function(compilation){
  //无参数  ，异步平行钩子?  14
  debugger;
});

compiler.hooks.afterCompile.tap('afterCompile',function(compilation){
    // 15
  debugger;
});


compiler.hooks.shouldEmit.tap('shouldEmit',function(compilation){
  //16
  debugger;
});

// compiler.hooks.needAdditionalPass.tap('needAdditionalPass',function(compilation){
//   //无参数
//   debugger;
// });

compiler.hooks.emit.tap('emit',function(compilation){

  //生成资源到 output 目录之前。 17
  debugger;
});
// compiler.hooks.afterEmit.tap('afterEmit',function(compilation){
//   //生成资源到 output 目录之后。  18
//   debugger;
// });

compiler.hooks.done.tap('done',function(stats){
  //编译完成  19
  debugger;
});

compiler.hooks.failed.tap('failed',function(error){
  //编译失败
  debugger;
});

compiler.hooks.invalid.tap('invalid',function(fileName, changeTime){
  //监听模式下，编译无效时。
  debugger;
});

compiler.hooks.watchClose.tap('watchClose',function(){
  //监听模式停止。
  debugger;
});
};

module.exports = FileListPlugin;
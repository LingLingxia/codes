###devtool

####inline-source-map 精确到行,浏览器可以看到loader转换后的webpack转换前的代码


###

|name|had source map|tips|
|:----|:----|:----|
|source-map|yes|map和打包之后的文件分离,有url指向map|
|hidden-source-map|yes|同上,无url指向map|
|inline-source-map|no|sourceMap和代码在同一文件内,所以它不能用在生产环境|
|nosources-source-map|只有一个sourcemap|不知如何使用|
|eval-source-map|no|代码即直接解析source-map,定位到列,loader未转换|
|eval|no|代码即直接解析源码|
|cheap-eval-source-map|no|loader转换后,定位到行|
|cheap-module-eval-source-map|no|定位到模块|
|cheap-module-source-map|无代码?|.|
|cheap-source-map|无代码?|.|


###webpack插件开发
标准写法
```
function myPlugin(){

}
myPlugin.prototype.apply = function(compiler){
   //原写法
   compiler.plugin('hookName',function(compilation,callback){
       // compilation 逻辑处理

       //异步必须传,传了必须写.
       callback();
   });

   //新写法
   compiller.hook.hookName.tap(function(compilation){//同步

   })

   compiler.hooks.run.tapAsync.tap(function(compilation,callback){
        callback();
   })
}
```

###
- 重要的webpack钩子
compile 编译器开始编译
compilation 编译器开始一个新的编译过程
emit 在生成资源并输出到目录之前
done 完成编译


compiler 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。
compilation 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。
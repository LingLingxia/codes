# 配置字段

## 入口entry
- 1.入口时一个数组的时候 （假设长度为2），会打包两份文件，一般用于库的编写。

## 出口 output
- output.auxiliaryComment  （辅助评论）<br>向导出容器中插入注释
假如我要导出一个库*someLibName*,在配置文件写如下代码
```
  output:{
    filename:'[name].js',
    path:__dirname+'/dist',
    auxiliaryComment:'you and me',
    library: "someLibName",
    libraryTarget: "umd"
  },
```
会生成这样的代码，根据环境支持把someLibName这个东西注入.
```
(function webpackUniversalModuleDefinition(root, factory) {
	//you and me
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	//you and me
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	//you and me
	else if(typeof exports === 'object')
		exports["someLibName"] = factory();
	//you and me
	else
		root["someLibName"] = factory();
})(window, function() {...
```
而如果我把output.auxiliaryComment换成一个对象
```
auxiliaryComment: {
  root: "Root Comment",
  commonjs: "CommonJS Comment",
  commonjs2: "CommonJS2 Comment",
  amd: "AMD Comment"
}
```
```
(function webpackUniversalModuleDefinition(root, factory) {
	//CommonJS2 Comment
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	//AMD Comment
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	//CommonJS Comment
	else if(typeof exports === 'object')
		exports["someLibName"] = factory();
	//Root Comment
	else
		root["someLibName"] = factory();
})(window, function() {
```
- chunkFilename (非入口chunk的名称)<br>
我希望动态加载lodash这个文件，在用到它的时候在加载进来，那么它需要被单独打包成一个chunk。
此时代码如下<br>
XXX.js
```
   return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
     var element = document.createElement('div');

     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

     return element;

   }).catch(error => 'An error occurred while loading the component');
  }

```
webpack.config.js
```
output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
```
那么这个chunk会被命名为lodash.bundle.js，不写chunkFilename会被命名成lodash.bundle.js<br>
（可是为什么名字会被自己加上vendors~）

- chunkLoadTimeout （请求到期的毫秒数）<br>
假设把它设置为100，如果请求chunk的时候100ms内没有反应，就不发请求了。设置成1后，第一次请求失败，第二次成功。

- crossOriginLoading 只用于 script 标签的 JSONP 来按需跨域加载 chunk。<br>
crossOriginLoading: false - 禁用跨域加载（默认）<br>
crossOriginLoading: "anonymous" - 不带凭据(credential)启用跨域加载<br>
crossOriginLoading: "use-credentials" - 带凭据(credential)启用跨域加载 with credentials 
*没有使用场景证明这里是使用在客户端还是服务端*

- jsonpScriptType 自定义json中的script的类型<br>
 默认*text/javascript*  可选*module*与 ES6 就绪代码一起使用

- devtoolModuleFilenameTemplate  此选项仅在 「devtool 使用了需要模块名称的选项」时使用。
- filename 输出的文件名，


## 模块 module
- noParse 正则表达式，匹配到却需要忽略的路径，（原则上只能写js路径，因为其他资源会报错。）
- Rule 数组
  - 属性 test(reg), include(path), exclude(path) 和 resource(string??,和include,exclue互斥，一般不用) 对 resource 匹配，并且属性 issuer 对 issuer 匹配。
  这一组听说还有 and or not
- Rule.enforce 目前灭有发现post 和pre选项有什么区别 ,为什么要指定种类。
- Rule.loader 如果只有一个loader，不需要用use数组，可改为loader对象.
- Rule.oneOf Array只使用匹配的第一个。
```
{
  test: /.css$/,
  oneOf: [
    {
      resourceQuery: /inline/, // foo.css?inline
      use: 'url-loader'
    },
    {
      resourceQuery: /external/, // foo.css?external
      use: 'file-loader'
    }
  ]
}
```
- Rule.parser 设置为false将禁用解析器。
- UseEntry use是一个Array|String,数组元素可以是String|Object,<br>
  UseEntry就是这个对象的属性.<br>
  *loader :String Required  loader-name*
  *option:没有说明*
## 设置模块如何被解析 resolve
- resolver 是一个库(library)，用于帮助找到模块的绝对路径。一个模块可以作为另一个模块的依赖模块，然后被后者引用，如下：<br>
```
import foo from 'path/to/module'
// 或者
require('path/to/module')
```
这个选项的配置告诉webpack如何解析模块.<br>
当在文件中require一个路径的时候。
```
if(path 指向一个文件){
  if(path 有扩展名){
   直接打包
  }else if(path 无扩展名){
    使用resolve.extensions 作为扩展名打包
  }
} else if(path 指向一个文件夹){
    if(此文件夹包含package.json文件){
       var newPath = resolve.mainFields ;//默认为main.js
       package.json[newPath] 为新的文件路径。
    }else if(!package.json ||! package.json[main.js]){
      则按照顺序查找 resolve.mainFiles 配置选项中指定的文件名，
      看是否能在 import/require 目录下匹配到一个存在的文件名。//不太明白
    }
}

```

- alias 路径的别名，
也可以在给定对象的键后的末尾添加 $，以表示精准匹配,默认匹配xxx/index.js
```
alias: {
  xyz$: path.resolve(__dirname, 'path/to/file.js')
}
```
这将产生以下结果：
```
import Test1 from 'xyz'; // 精确匹配，所以 path/to/file.js 被解析和导入
import Test2 from 'xyz/file.js'; // 非精确匹配，触发普通解析
```
- aliasFields 根据此规范解析  默认'browser';
- descriptionFiles 用于描述的 JSON 文件。默认：["package.json"]
- enforceExtension 强制文件路径带扩展名? 默认：false
- extensions 默认扩展名 ['.js','.json']
- mainFields 导入模块优先使用其package.json中的哪个字段。 某个环境下['browser', 'module', 'main']
- mainFiles 解析目录时默认文件名  默认:['index'];
- modules 模块搜索目录 默认：['node_modules']
- unsafeCache  默认true缓存一切 
正则表达式，或正则表达式数组，可以用于匹配文件路径或只缓存某些模块。例如，只缓存 utilities 模块：
unsafeCache: /src\/utilities/
- plugins 解析插件  列表 
```
plugins: [
  new DirectoryNamedWebpackPlugin()
]
```
- symlinks 是否将符号链接(symlink)解析到它们的符号链接位置(symlink location)。默认：true
符号链接 与硬连接相对应，Lnux系统中还存在另一种连接，称为符号连接（Symbilc Link），也叫软连接。软链接文件有点类似于Windows的快捷方式。它实际上是特殊文件的一种。在符号连接中，文件实际上是一个文本文件，其中包含的有另一文件的位置信息。

- moduleExtensions  解析loader时 不写下面的代码 (loader name=> example-loader) 写下面的代码(loader name => example)
```
moduleExtensions: [ '-loader' ]
```

## 插件 plugins
一个数组。待详细解说。


## 开发服务器 devServer
描述影响 webpack-dev-server(简写为：dev-server) 行为的选项。 <br>
这里的选项默认用于 webpack-dev-server 。如果想用 webpack-dev-middleware .另写.
- after :function 提供自定义中间件的能力(初级应该用不着)
- allowedHosts :String[] 可访问服务的白名单域名 .开头的可以匹配子域名.什么意思？？



 



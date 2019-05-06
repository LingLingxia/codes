const string = 'test1test2test3';

// g 修饰符加不加都可以
const regex = /t(e)(st(\d?))/g;

for (const match of string.matchAll(regex)) { console.log(match);}
 


//node.js 不支持这个函数string.matchAll  ,但是这个一段代码在浏览器可以运行
//可以直接放在webpack项目里面的
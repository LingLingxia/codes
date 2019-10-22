 import identify_b from './identyfy_b'
 var identify_a = 111;
 var identify_c = 333;
// export  {
//   identify_a,
//   identify_b,
//   identify_c
// }

module.exports = {
    identify_a,
    identify_b,
    identify_c
}
//c 一定会被删掉

//不配置uglifyJS  b不会被删掉

//配置uglifyJS

//b 无副作用   删掉
//b 有副作用  sideEffects:false 删掉



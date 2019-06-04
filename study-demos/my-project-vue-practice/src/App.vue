<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>
//必须把  defaultFun放在前面,否则报错
//import  defaultFun, {sayHello} from  './js/output.js';   //这样也是对的
//也可以分两次引入

//import defaultFun from  './js/output.js';
//import * as demo from './js/output.js';
import defaultFun,* as demo from './js/output.js';
demo.no();
demo.errTest();
demo.sayHello();
defaultFun();
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

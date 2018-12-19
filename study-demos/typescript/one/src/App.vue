<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="testProvide()">
    <hello-world msg="Welcome to Your Vue.js + TypeScript App"  @say-hello="sayHello"/>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  sayHello(param1: string, param2: number){
    console.log(`hello ${param1} ${param2}`);
  }
   @Provide() fooo:string = 'plplpl00000000000';

  testProvide():void{
    // this.foo = '1234567';
    // console.log(this.foo);
  }
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

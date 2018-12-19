<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <p>
      <test-demo one='one'></test-demo>
    </p>
    <p>
      <button @click="sayHello('abcd', 8)">button</button>
    </p>
    <p> 
      <button @click="testProvideAndInject()" >测试provide和inject</button>
    </p>
    <p>
      {{veryGood}}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Inject, Vue } from 'vue-property-decorator';
import { mixins } from 'vue-class-component'
import TestDemo from './TestDemo.vue'
import MyMixin from './../mix/mix.js'

@Component({
  components: {
    TestDemo,
  }
})
export default class HelloWorld extends mixins(MyMixin) {

  name: string = '';
  public lorem: string = 'lorem';
  public num: number =3;

  testProvideAndInject():void {
    
    console.log('this.foo', this.foo);
    console.log('this.mixinValue', this.mixinValue);
  }

  @Prop({
    type: String,
    default: 'you',
    required: true,
  }) public msg!: string  ;

  @Emit()
    sayHello(n1: string, n2: number){
      n1+='asdfasdf'
    }
   @Inject({ from: 'fooo', default: 'default' }) 'foo'!: string

   get veryGood(){
     return this.foo + this.lorem
   }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">

    <div class="a-block">
      <h1>jsx渲染的组件</h1>
      <jsx>默认槽内容</jsx>
      <jsx-props-test 
        :level="2" 
        :myDisabled="true" 
        myId="abc"
        name="这只是一个测试的名字"
        >
         sdfsdf
         <slot>one</slot>
        </jsx-props-test>
        <jsx-functional-test
          id="functional-test"
          style="color:#00ade5"
          class="functional-class"
          :msg="msg"
          @btn-click="clickMe()"
          >
          <span>第一个子节点</span><jsx>jsx作为子节点</jsx><p slot="first-name-slot">这是一个slot</p>
          </jsx-functional-test>
    </div>
    <!-- <slot></slot><slot name="first-name-slot"></slot> -->
    <div class="a-block">
      <h1>动态加载</h1>
        <model-demo v-model="msg" @input="check()" @change="check()"></model-demo>
        <model-demo ></model-demo>
        <button @click="loadLodash()">动态加载</button>
    </div>
    <div class="a-block">
      <h1>自定义指令</h1>
      <custom-instruction></custom-instruction>
    </div>

  </div>
</template>

<script>
import modelDemo from './modelDemo';
import customInstruction from './customInstruction';
import jsx from './jsx';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    modelDemo,
    customInstruction,
    jsx:jsx.default,
    jsxPropsTest:jsx.propsTest,
    jsxFunctionalTest:jsx.functionalTest
  },
  methods:{
    check(val){
      console.log(val);
    },
    loadLodash(){
      import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
      var innerHTML = _.join(['Hello', 'webpack'], ' ');
     console.log(innerHTML);

   }).catch(error => 'An error occurred while loading the component');
  },
  clickMe(){
    alert('click me');
  }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.a-block{
  margin:10px;
  background:#eee;
}
h1, h2 {
  font-weight: normal;
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

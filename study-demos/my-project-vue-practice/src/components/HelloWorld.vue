<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <model-demo v-model="msg" @input="check()" @change="check()"></model-demo>
    <model-demo ></model-demo>
    <button @click="loadLodash()">动态加载</button>
  </div>
</template>

<script>
import modelDemo from './modelDemo';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    modelDemo
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
  }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

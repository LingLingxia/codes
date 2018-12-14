<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <model-demo v-model="msg" @input="check()" @change="check()"></model-demo>
    <model-demo ></model-demo>
  </div>
</template>

<script>
import modelDemo from './modelDemo';
import TypeScriptDemo from './TypeScriptDemo';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    modelDemo,
    TypeScriptDemo
  },
  methods:{
    check(val){
      console.log(val);
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

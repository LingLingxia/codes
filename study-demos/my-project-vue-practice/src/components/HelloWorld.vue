<template>
  <div class="hello">
    <div>
      <h2>draggable源码学习</h2>
      <draggable></draggable>
    </div>
    <div class="a-block">
      <h2>测试nextTick</h2>
      <button @click="doNextTick()">click me</button>
    </div>
    <div class="a-block">
          <h1>测试vm.$forceUpdate是否可以监听到新增的数据并渲染</h1>
          <p>如果用了vue检测不到的方式去改变值,那么只有本次修改生效,并不会把这个新加的属性变成响应式的</p>
          <p v-for="(item,key) in testData" :key="key">{{item.name}}</p>
          <button @click="operateAge('add')">添加年龄</button>
          <button @click="operateAge('edit')">修改年龄</button>
          <button @click="operateAge('remove')">移除年龄</button>

    </div>
    <div class="a-block">
      <h1>slot</h1>
      <slot-demo>
        这是父组件的slot-default的值
        <h3 slot="slot-one" slot-scope="user">
          {{user.data.name}}这是slot-one里面的值{{user.id}}
           <ul>
             <li v-for="(item,index) in user.arr" :key="index">{{item}}</li>
           </ul>
          </h3>
        </slot-demo>
    </div>
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
    <div class="a-block">
      <h1>修改数组元素,响应式测试</h1>
      <ul>
        <li v-for="item in arr" :key="item.index">{{item.name}}</li>
      </ul>
      <button @click="changeArrProperty()">点击修改数组属性</button>
    </div>

  </div>
</template>

<script>
import modelDemo from './modelDemo';
import customInstruction from './customInstruction';
import jsx from './jsx';
import slotDemo from './slotDemo';
import draggable from './draggable';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:null,
      arrIndex:1,
      testData:[{
        name:'llx'
      },{
        name:'llx2'
      }

        
      ]
    }
  },
  components:{
    modelDemo,
    customInstruction,
    jsx:jsx.default,
    jsxPropsTest:jsx.propsTest,
    jsxFunctionalTest:jsx.functionalTest,
    slotDemo,
    draggable
  },
    created(){
      this.arr = [
      {
        index:1,
        name:'llx'
      },
      {
        index:2,
        name:'llx2'
      }
    ];
  },
  methods:{
    doNextTick(){
        this.$nextTick().then(()=>{
          console.log('nextTick2');
        })    
        this.$nextTick(()=>{
          console.log('nextTick1');
        });

    },
    operateAge(type){
      switch(type){
        case 'add':
        //this.testData.age ='24';
        this.testData[0]={name:'llx3'};
        //这一次调用forceUpdate会更新,但是这样的写法并没有把这个新的对象变成一个observer对象
        //大部分情况下,我们不需要自己调用forceUpdate
        this.$forceUpdate();
        break;
        case 'edit':
        // this.testData.age = '25';
        this.testData[0].name='llx';
        // this.$forceUpdate();
        break;
        case 'remove':
        // delete this.testData.age;
      }
    },
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
  },
  changeArrProperty(){
    //生效
    // this.arr[1].name='llx'+ this.arrIndex++;
    // console.log(this.arr);

    //无效
    this.arr[1]={
      index:this.arrIndex++,
      name:'llx'+this.arrIndex
    }
  }

  },
  created(){
    const string = 'test1test2test3';
    // g 修饰符加不加都可以
    const regex = /t(e)(st(\d?))/g;

    for (const match of string.matchAll(regex)) { console.log(match);}
  
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

<template>
  <div>
    <p>{{one}}</p>
    <input type="text" v-model="child"/>

    <button @click="clickButton('a')">button</button>
    <div>
      <p style="color:red" title="这是一个测试store.state的视图">{{name}}</p>
      <button title="这是一个测试store.mutation的视图" @click="changeMyName()">click me to test store.mutation</button>
    </div>
    
  
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component, Prop , Watch} from 'vue-property-decorator'
import {State, Action, Mutation, Getter, namespace} from 'vuex-class'

const myModule = namespace('./../store');

@Component
export default class TestDemo extends  Vue{
    child: string = 'I am child';
    clickButton(param: string): void{ 
        console.log(param);
    }
    changeMyName():void {
      this.setName('my name is llx');
    }
    @State('name') name!:string;
    @Mutation('setName') setName!:any;

    @Prop({
      type: String,
      required: true,
      default: 'lorem'
    }) one!: string ;

    @Watch('child') onChildChange(val: string){
      console.log(val);
    }
    @Watch('name')  onNameChange(val:string){
      this.child = this.child + val;
    }

    @Prop({
      type: [String, Boolean],
      default: true,
      }) public propC!: string | boolean ;
}
</script>


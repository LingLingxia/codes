<template>
  <div>
    <p>{{one}}</p>
    <input type="text" v-model="child"/>

    <button @click="clickButton('a')">button</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component, Prop , Watch} from 'vue-property-decorator'

@Component
export default class TestDemo extends  Vue{
    public child: string = 'I am child';
    public clickButton(param: string): void{ 
        console.log(param);
    }

    @Prop({
      type: String,
      required: true,
      default: 'lorem'
    }) public one!: string ;

    @Watch('child') public onChildChange(val: string){
      console.log(val);
    }

    @Prop({
      type: [String, Boolean],
      default: true,
      }) public propC!: string | boolean ;
}
</script>


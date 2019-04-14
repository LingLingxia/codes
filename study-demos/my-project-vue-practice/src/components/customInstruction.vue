<template>
    <div>
        <input type="text" 
            v-focus:foo="params" 
            placeholder="自定义指令测试" 
            v-model="msg" 
            v-if="showInput"
        />
        <model-demo ></model-demo>
        <button @click="showInput=!showInput">切换指令显示</button>
    </div>
</template>
<script>
import autofocus from '@/directive/autofocus';
import modelDemo from './modelDemo';
export default {
    data(){
        return{
            msg:'777',
            params:'444',
            showInput:true
        }
    },
    methods:{
        showListener(){
            
        }
    },
    directives:{
        focus:autofocus
    },
    components:{
        modelDemo
    }
}
</script>
<style>
  input {
    border: 1px solid blueviolet;
  }
</style>



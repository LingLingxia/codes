<template>
    <div>
         <slot name="slot-one"  :data="person" :arr="arr" id="this is id"></slot>
         1231234
         <slot></slot>
    </div>
</template>
<script>
//在组件里面绑定数据,调用时使用slot-scope随意绑定一个变量,可以获取整个组件通过slot传递的所有值
export default {
    data(){
        return {
            person:{
                name:'llx',
                age:'24'
            },
            arr:['a','b','c']
        }
    },
    methods:{
        showListener(){
            console.log(this.$listeners);
        }
    }
}
</script>
<style>
  input {
    border: 1px solid blueviolet;
  }
</style>



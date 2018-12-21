<template>
    <div>

    <input type="text"  />
    <button @click="showListener()">liseners</button>
    </div>
</template>
<script>
export default {
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



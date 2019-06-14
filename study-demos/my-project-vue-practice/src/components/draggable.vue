<template>
    <div>
    <draggable element="ul" v-model="list">
      <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
    </draggable>
    </div>
</template>

<script>
import  draggable from 'vuedraggable';
export default {
     components:{
        draggable
     },
     data(){
         return{
             list:[
                {
                id: 1,
                name: 'a'
                },
                {
                id: 2,
                name: 'b'
                },
                {
                id: 3,
                name: 'c'
                },
                {
                id: 4,
                name: 'd'
                },
                {
                id: 5,
                name: 'e'
                },
                {
                id: 6,
                name: 'f'
                }
             ]
         }
     }
}
</script>
<style scoped>

</style>

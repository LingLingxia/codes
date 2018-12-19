import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
export default new Vuex.Store({
   state:{
     login:true,
     name:'this is my name',
     token:'i am a token'
   },
   mutations:{
      setLogin(state,value){
         state.login = value;
      },
      setName(state,value){
        state.name = value;
      }
   },
   actions:{
      setActions(context,value){
        context.commit(value);
      }  
   },
   getters:{
      getName(state){
        return state.name+' name';
      }
   }
});

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

  const router = new VueRouter({
    routes // short for `routes: routes`
  })
  
const app = new Vue({
    el:'#app',
    data:{
        name:'llx'
    },
    router:router,
    methods:{
        login(){

        },
        register(){
            axios.post('/api/register',{name:'llx',password:'123456'}).then(data=>{
                console.log(data);
            }).catch(err=>{
                console.log(err);
            })
        }
    }
    // components:{
    //     'a-button':antd.button
    // }
})
//函数式组件

/**
 * 1.每个函数式组件都是一个对象,包含两个属性  render函数和props属性
 * 2.createElement作为render函数的第一参数自动传入  returns {VNode}
 * 3.createElement的第一个参数一定是 html-tag-name, 接受 {String | Object | Function} .,
 * 
 * 4.最后一个参数是需要渲染的html子元素,Array or string.可递归调用createElement
 * 5.第二个参数是可选参数,为此组件的描述对象,是绑定在dom元素上面的各种属性,详情见 [vue学习笔记.md]
 * 
 *
 */

 var jsx = {
     default:{
        render(createElement,context){
           // console.log('函数组件',context);//在没有加入functional:true时,context是没有值的
            return createElement('h1',['基础组件',this.$slots.default])
           },
           props:{
       
           }
     },
     propsTest:{
        // functional:true,  加入functional:true之后,props只能通过context取到
        render(createElement){
            return createElement('h'+this.level,
            {
                staticClass:"static-class",
                staticStyle:{
                    padding:'10px'
                },
                class:{
                    classOne:true,
                    classTwo:this.level==2
                },
                style:{
                    fontSize:'14px',
                    color:'#333'
                },
                attrs:{
                    id:this.myId,
                    disabled:this.myDisabled
                },
                props:{
                    //这是做什么的??   和下面的props并不一样,这里的值取不到
                    // myId:{
                    //     type:String,
                    //     default:'a-id'
                    // },
                },
                domProps:{
                    //dom属性 value innerHTML styleList等
                   // innerHTML:'<p>uuuuu</p>'  这会覆盖下面的子元素数组值
                },
                on:{

                },
                nativeOn:{//原生事件的监听
                    

                },
                directives: [
                    // {
                    //   name: 'my-custom-directive',
                    //   value: '2',
                    //   expression: '1 + 1',
                    //   arg: 'foo',
                    //   modifiers: {
                    //     bar: true
                    //   }
                    // }
                  ],
                  scopedSlots: {//没有看懂
                    default: props => createElement('span', props.text)
                  },

            },
            ['加上type',this.name])
           },
           props:{
              level:{
                  required:true,
                  type:Number
              },
              myId:{
                  type:String,
                  default:'a-id'
              },
              myDisabled:{
                  type:Boolean,
                  require:true
              },
              name:{
                type:String,

            }
           }
     },
     functionalTest:{
         functional:true,
         render(h,context){
             console.log('函数组件',context);
             /**
              * context对象的输出
                    children: Array(3)vnode [span,jsx,p]三个子节点
                    data:{ //和createElement的第二个参数写法一毛一样,可以直接传递
                            attrs: {id: "functional-test", msg: "Welcome to Your Vue.js App"}//普通属性
                            on: {btn-click: ƒ}//监听的事件 
                            staticClass: "functional-class"//静态类名  createElement第二个对象参数传入的class不在这里显示
                            staticStyle: {color: "#00ade5"}//静态样式,createElement第二个对象参数传入的style不在这里显示
                        }
                    injections: undefined,
                    listeners: {btn-click: ƒ}//等于data.on
                    parent:vm对象,
                    props:{id: "functional-test", msg: "Welcome to Your Vue.js App"}//这里等于data.attrs
                    slots: ƒ ()//执行后返回 {default: (2) [VNode, VNode], first-name-slot: [VNode]]}
              * 
              */
             console.log('所有插槽',context.slots())
             var slots = context.slots();
             return h('h3',
             {
               attrs:{
                   disabled:true
               },
               class:{
                   classOne:true,
                   classTwo:false
               },
               style:{
                   border:'1px solid #333'
               },

             },
             ['函数式组件',context.props.msg,slots.default,slots['first-name-slot']]);
         },
        // props:{ 加了functional之后此属性失效
        //     msg:String,
        // }
     }

 }
export default jsx;


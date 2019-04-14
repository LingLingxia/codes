export default{
    bind(){
        //之调用一次
       console.log('bind');
    },
    inserted(el,binding,vnode,oldVnode){
        console.log('inserted',binding,vnode,oldVnode);
        //binding对象
       //  arg: "foo"   expression: "params"  name: "focus"  rawName: "v-focus:foo"   value: "444"
       //params是一个表达式不是一个字符串.如果不在实例中定义会报错.
       el.focus();
    },
    update(){
        //通过输入框改变文本值,则一直调用update和componentUpdated函数
        console.log('update');
    },
    componentUpdated(){
        //试验失败,并没单独调用此函数
        console.log('componentUpdated');
    },
    unbind(){
        //在绑定的dom被移除时调用,比如用v-if切换显示的时候
        console.log('unbind');
    }
}
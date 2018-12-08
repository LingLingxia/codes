function MyPracticeVue( config ){
    for(var i in config){
        this[i]=config[i];
    }
   new Compile(this);

}

function Compile(vm){
    this.vm=vm;
    this.el=document.querySelector(this.vm.el);
    this.fragment=null;
    this.init();
}
Compile.prototype={
    init(){
        this.nodeToFragment();
        this.compileNode(this.fragment);
        this.el.append(this.fragment);
     },
     nodeToFragment(){
        var child=this.el.firstChild;
        while(child){
            this.fragment.append(child);
            child=this.el.firstChild;
        }
     },
     compileNode(node){

     },

}
new MyPracticeVue({
    el:'#app',
    data:{
        name:'hello world'
    }
});
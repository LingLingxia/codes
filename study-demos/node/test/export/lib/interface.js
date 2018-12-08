

function hello(){
    var name;
    this.setName = function(nname){
        name=nname;
    };
    this.sayHello =function(){
        console.log('hello ' + name);
    };
};
module.exports=hello;
export default function(){
    console.log('这是输出的测试函数');
}

export var sayHello = function(){//这样写的 最终会成为  export对象的属性,加在下面的对象里面
    console.log('hello,I am in output.js');
}

function sayNO(){
    alert('no');
}

export {
    sayHello as errTest ,
}
export {
    sayNO as no

}

// import * as a from XXX 是不会引用到 default的
//imprt a from XXX  a 就等于那个default
//要都引入   import b,* as a from XXX 就可以了 顺序不能乱 default的输出要在前面
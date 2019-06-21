function* helloWorldGenerator(){
        yield 'hello';
        yield 'world';
        return 'ending';
}

let obj = {};
obj[Symbol.iterator] = helloWorldGenerator;//这里不要打括号,因为其他的函数调用接口的时候,会先执行函数.
console.log([...obj]);//['hello','world'] 没有ending
console.log('next函数的参数--------------------------------------------------------------------');

function* f(){
    var i = 0;
    for(var i =0;true;i++){
        var reset = yield i;//如果 没有传参数,那么reset的值就一直是undefined
        if(reset) {i=-1}
    }
}

var g = f();
g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }g.next();


function* foo(x){
    var y = 2*(yield(x+1));
    var z = yield(y/3);
    return (x+y+z);
}

var a = foo(5);
a.next(); //{value:6,done:false}
a.next(); //{value:NaN,done:false}
a.next(); //{value:NaN,done:true}


var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true } 5 + 24 + 13

// 由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。
// V8 引擎直接忽略第一次使用next方法时的参数，
// 只有从第二次使用next方法开始，参数才是有效的。
// 从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。


console.log('为对象加上iterator接口--------------------------------------------------------------------');

let jane = { first: 'Jane', last: 'Doe' };
//这种写法是不能给jane[Symbol.iterator]赋值的,因为赋值的时候不能带括号,这里不带括号就不能传参.
function* objGenerator(obj){//这里,一个generator函数执行后返回一个generator函数
   for(var i in obj){
       yield [i,obj[i]];
   }
}

for( let [key,value] of objGenerator(jane)){//forof 会自动遍历   obj[Symbol.iterator] 
    //objGenerator(jane) 就是一个有symbol.iterator的对象  且等于它自己,所以这里可以写成
    console.log(key,value);
}

//这样写是成功的
jane[Symbol.iterator] = function* (){
    for(var i in this){
        yield [i,this[i]]
    }
}
for( let [key,value] of jane){
    console.log(key,value);
}

//Generator 函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。
function* gen(){
    // some code
  }
  
var g = gen();

g[Symbol.iterator]() === g
// true

g[Symbol.iterator] === gen
//false



console.log('yield* --------------------------------------------------------------------');
//yield* foo()//后面接一个generator函数  ,带括号
//任何数据结构只要有 Iterator 接口，就可以被yield*遍历。 比如数组,字符串
function* inner(){
    yield 'home';
}
function* outer1(){
    yield 'hello';
    yield inner();
    yield 'world';
}
let o1 = outer1();
o1.next().value;
o1.next().value;
o1.next().value;



function* outer2(){
    yield 'hello';
    yield* inner();
    yield 'world';
}

let o2 = outer2();
o2.next().value;
o2.next().value;
o2.next().value;


console.log('yield* --------------------------------------------------------------------');
function* gen(){
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}

function F(){
    //  gen.prototype只是Object.create(Generator)生成的一个对象,所以不会影响别的generator函数的prototype
    return gen.call(gen.prototype);
}
var f = new F();

f.next();
f.next();
f.next();


function* gen2(){

}

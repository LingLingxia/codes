//扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
//1.用于函数参数解析    2.用于数组解析
const numbers = [4, 38];
//add(...numbers) // 42

let a = [1,2,...[3,4]];//[1,2,3,4];

function sayName(obj){
  this.name = obj.name;
  console.log(this.name,obj.name);
}

let exObj = {
  name:'llx'
}
//这个用法很奇怪啊，既然有了apply来绑定this,为什么还要调用一次bind。来自es6文档示例  
//探索后解释  
/**
 * 首先这个和es6文档示例的用法是不一样的，仔细观察可以发现文档的bind函数并没有括号，
 * new (Date.bind.apply(Date, [null, 2015, 1, 1]))
 *  Date是apply的this对象   null 是bind的第一个参数   2015,1,1是Date的参数
 * 这个写法是为了让new  可以和apply一起用
 */
sayName.bind(exObj).apply({name:'llx2'},[{name:'hello'}]);
//llx hello


new (sayName.bind.apply(sayName,[{name:'llx2'},{name:'hello'}]));
//


// ES5
new (Date.bind.apply(Date, [null, 2015, 1, 1]))    //这是神马用法

// ES6
new Date(...[2015, 1, 1]);



//...浅拷贝

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
arr3[0] = 9;
console.log(arr1);//1,2,3


let objArr1 = [{name:1}];
let objArr2 = [{name:2}];
let objArr3 = [...objArr1,...objArr2];
objArr3[0].name = 3;
console.log(objArr1)//[{name:3}]

//对Array.from传入一个数组，对元素也是浅拷贝
let arr4 = Array.from(arr1);
arr4[0] = 4;
console.log(arr1);//3 

let objArr4 = Array.from(objArr1);
objArr4[0].name = 4;
console.log(objArr1)//[{name:4}]


//数组实例的copyWith

//keys,values,entries的用法是因为返回的对象有iterator接口，for of可以用来迭代有iterator接口的对象
var arr =[1,2,3,4,5];
console.log(arr.keys(),arr.values(),arr.entries());
for( index of arr.entries()){//每个item是一个数组
    console.log(index);
}

//es6 的 find findIndex include的功能在es5中都由indexOf实现，但是es5不能判断NaN,（个人觉得问题不大）
// 另一个升级就是更加语意化，简化了

//数组实例的 flat()，flatMap()
//console.log([1, 2, [3, 4,[6,7,[3]]]].flat(Infinity));//node居然报错？？浏览器正常
[1,3].flatMap(x=>[x * 2]); //[2, 6]
[1,3].flatMap(x=>[x,x * 2]); //[1,2,3,6]
[1,3].map(x=>[x*2]);
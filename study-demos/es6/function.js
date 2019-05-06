let arr = [1,2,3];
arr.a = 2;
var a = 3;
// arr.forEach(item=>{
//   console.log(this.a);
// })

arr.forEach(function(item){
    console.log(this.a);
});

const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5);
var f = ()=>{
  console.log(this.a);
}

f();//3

f.call({a:4})//3

//对箭头函数使用.call是没有用的。因为它在创建的时候已经绑定this了


//对象不构成单独的作用域？？？这句话啥意思。。。  只有函数才构成单独的作用域 ,也不对，函数用call的时候才绑定到作用域 

var lives = 8;
const cat = {
  lives: 9,
  jumps: () => {
   // this.lives--;//这里的lives是全局的lives
   console.log(this.lives);//8
  }
}

var k = 2;
function aBlock(){
  var k = 1;
  var sayK = ()=>{
    console.log(this.k);
  }
  sayK();
}

let s = new Set([22,3,4,5,22,5,4]);
s.add(4);
s.delete(4);
s.has(4);
s.size;
let obj = {
    name:'llx'
}
s.add(obj);//可以添加对象
s.add(obj);
for(item of s){
    console.log(item);
}

// for(item of s.keys()){
//     console.log(item);
// }

// s.forEach(item=>{
//     console.log(item);
// })



//WeakSet 的成员只能是对象，而不能是其他类型的值。 所以这个东西存在的意义很神奇啊
//WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，
//它在 WeakSet 里面的引用就会自动消失。

// 由于上面这个特点，WeakSet 的成员是不适合引用的，
// 因为它会随时消失。另外，由于 WeakSet 内部有多少个成员
// ，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，
// 而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。
//WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
const ws = new WeakSet();


console.log('------------------map--------------------------------');
const m = new Map();
const o = {p:'Hello World'};
m.set(o,'content');
m.get(o);

m.has(o);
m.delete(o);
m.has(o);


const m2 = new Map([
    ['name','map'],
    ['title','map-title']
]);

//WeakMap的键名是弱引用,但是当键名消失的时候,这个键值也不在了,这个键值在 外部被修改,内部???
let m3 = new WeakMap();
let p1 = {name:'name1'};
let p2 = {age:'age1'};

m3.set(p1,p2);
m3.has(p1)//true
p2 = null;
m3.get(p1)//{age:'age1'}
p1 = null;
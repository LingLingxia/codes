//异步加载图片


function loadImageAsync(url){
    return new Promise((resolve,reject)=>{
        var image = new Image();
        image.onload = function(){
            resolve(image);
        };
        image.onerror = function(){
            reject('load fail');
        };
        image.src = url;
    });
}
let url = 'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=00af05b334f33a87816d061af65d1018/8d5494eef01f3a29f863534d9725bc315d607c8e.jpg';
loadImageAsync(url).then((img)=>{
    document.body.appendChild(img);
});


//返回一个promise,如果promise1  resolve的是另一个promise2,那么p1后面的then,catch都是针对的p2

const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
       // reject(new Error('fail'));
       resolve('good');
    }, 3000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(p1);
    }, 1000);
});

p2.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})


console.log('promise.all()-----------------------------------------------------------------------------------');
const p1 = new Promise((resolve,reject)=>{
    resolve('hello');
}).then(data=>data).catch(err=>err);

//作为promise.all 参数的promise对象,一定要在then里面返回data,否则 promise.all的data就是一组undefined的数组
const p2 = new Promise((resolve,reject)=>{
    throw new Error('fail');
}).then(data=>data).catch(err=>err);

Promise.all([p1,p2]).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});
// 上面代码中，p1会resolved，p2首先会rejected，但是p2有自己的catch方法，
// 该方法返回的是一个新的 Promise 实例，p2指向的实际上是这个实例。该实例执行完catch方法后，
// 也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved，
// 因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。

console.log('promise.resovle()的执行时机-----------------------------------------------------------------------------------');

Promise.resolve().then(()=>{
    console.log(2);//本轮事件循环结束时执行
})

setTimeout(() => {
    console.log(3);//下一轮事件循环开始时执行
}, 0);

console.log(1);
//1 ,2 ,3
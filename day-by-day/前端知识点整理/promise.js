// 1.1.1 Promise/A+规范
// 规范出现的原因

// 1、 我们不知道异步请求什么时候返回数据，所以我们就需要些回调函数。但是在某些情况下我们需要知道数据是在什么时候返回的，然后进行一些处理。

// 2、 当我们在异步回调里面处理的操作还是异步操作的时候，这样就形成了异步回调的嵌套

// 3、 正是为了杜绝以上两种情况的出现，社区出现了Promise/a+规范



// 规范的内容是什么

// 1、 不管进行什么操作都返回一个promise对象，这个对象里面会有一些属性和方法（这个效果类似于jquery中的链式编程，返回自己本身）

// 2、 这个promise有三种状态

// Unfulfilled（未完成，初始状态）

// Fulfilled（已完成）

// Failed（失败、拒绝）

// 3、 这个promise对象的使用时通过then方法进行的调用

//   



const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class myPromise {
    constructor(exector) {
        let self = this;
        self.status = PENDING;
        self.value = undefined;
        self.reason = undefined;
        self.onResolveCallBacks = [];
        self.onRejectCallBacks = [];
        let resolve = (value) => {
            if (self.status == PENDING) {
                self.status = FULFILLED;
                self.value = value;
                self.onResolveCallBacks.forEach(cb => {
                    cb(self.value);
                });
            }
        }
        let reject = (reason) => {
            if (self.status == PENDING) {
                self.status = REJECTED;
                self.reason = reason;
                self.onRejectCallBacks.forEach(cb => {
                    cb(self.reason);
                })
            }
        }
        try {
            exector(resolve, reject)
        } catch (e) {
            reject(e)
        }

    }
    then(onFulfilled, onRejected) {
        let self = this;
        if (self.status === FULFILLED) {
            return new myPromise((resolve, reject) => {
                let x = onFulfilled(self.value);
                resolve(x);
            });
            //onFulfilled(self.value);
        }
        if (self.status === REJECTED) {
            return new myPromise((resolve, reject) => {
                let x = onRejected(self.reason);
                reject(x);
            })
        }
        if (self.status === PENDING) {
            //self.onResolveCallBacks.push(onFulfilled);
            //self.onRejectCallBacks.push(onRejected);
            return new Promise((resolve,reject)=>{
                self.onResolveCallBacks.push(function(){
                    let x=onFulfilled(self.value);
                    if(x instanceof myPromise){
                        x.then(resolve,reject);
                    }else{
                        resolve(x);
                    }
                });
                self.onRejectCallBacks.push(function(){
                    let x=onRejected(self.reason);
                    if(x instanceof myPromise){
                        x.then(resolve,reject);
                    }else{
                        reject(x);
                    }
                })
            })
        }
    }
};


var p = new myPromise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve(2);
    // }, 1000);
    resolve(2);
});

p.then(x => {
    console.log(x);
    return x * 2;
},
    err => {
        console.log(err)
    }
).then(x => {
    console.log(x);
}, err => {

})


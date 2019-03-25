const fs = require('fs');
const watcher = fs.watch('./watched-floder',(eventType,filename)=>{
    if(filename){
        //此函数等于下面fs.FSWatcher的监听函数,只有在rename 和 change的时候会监听
        //注意:虽然它绑定在change监听事件上面,不代表只监听change事件
        console.log('in fs.watch',eventType,filename);
    }
});

// watcher.on('change',(eventType,filename)=>{

//     if(filename){
//         console.log('in fs.watcher',eventType,filename);
//     }
// })

watcher.on('close',(eventType,filename)=>{
    if(filename){
        console.log('in fs.watcher-close',eventType,filename);
    }
})

// setTimeout(()=>{
//     //调用关闭后确实关闭了监听,但是上面的函数也没有执行
//     watcher.close();
// },1000);

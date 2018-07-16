//需要实践异步读取文件的写法
//一次读取1.txt 2.txt 3.txt的内容，按顺序拼接后写入4.txt


const fs=require('fs');

var it;
function readTxt(filename){
    fs.readFile(filename,(err,data)=>{
        it.next(data);
    });
}

function *foo(arr){
    let t='';
    for(let i=0;i<arr.length;i++){
        let tmp= yield readTxt(arr[i]);
        t+=tmp;
    }

    fs.writeFile('4.txt',t,(err)=>{
        if(err) throw err;
        console.log('success!');
    })
    
}

it=foo(['1.txt','2.txt','3.txt']);
it.next();
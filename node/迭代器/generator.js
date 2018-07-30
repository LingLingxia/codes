
const fs=require('fs');
// fs.mkdir('a',(err)=>{
//     if(err) throw err;
//     console.log(' created a successful');
// });

// fs.writeFile('a/1.txt','2333',(err)=>{
//     if(err) throw er;
//     console.log(' write 2333 successful');
// });

// fs.appendFile('a/1.txt','4555',(err)=>{
//     if(err)  throw er;
//     console.log(' write 4555 successful');
// });

function chunk(fn){
    var arg=arguments;
    var arr=Array.prototype.slice.call(arg,1);

    return  function(callback){
        console.log(arr);
            arr.push(callback);
            arg[0].apply(null,arr);
    }
}




function *gen( name ){
    var m1=yield chunk(fs.mkdir,'a');

    var m2=yield  chunk(fs.writeFile,'a/1.txt','23333');

    var m3=yield chunk(fs.appendFile,'a/1.txt','45555'); 
}


var it=gen();

function run(data){
    var k=it.next(data);
    if(k.done) {
        return  k.value;
    }
    else{
          k.value(err=>{
           if(err) throw err;
           run(k);
     })
    }

}


run();


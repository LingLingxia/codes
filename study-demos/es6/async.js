var fs=require('fs');

function *gen(a){
  console.log(a);
//   var k=  yield readFile('1.js');
//   console.log(k);
}
var it=gen();
 it.next(2);
function readFile(name){
    fs.readFile(name,(err,data)=>{
        it.next(data);
    })
}

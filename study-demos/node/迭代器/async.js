const fs= require('fs');


const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName,'utf8', function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

// readFile('a/1.txt',).then(
//     data=>console.log(data)
// ).catch(err=>{
//     console.log(err);
// })

// readFile('a/2.txt').then(
//     data=>console.log(data)
// ).catch(err=>{
//     console.log(err);
// })

const asyncFile=async function(){
    try{
        var t1=await readFile('a/13.txt');
        
    }catch(err){
        throw err;
    }
    var t2=await readFile('a/2.txt');

    return t2;

}
var k=asyncFile();
k.then(data=>console.log(data)).catch(err=>{
    console.log(err);
})
const fs=require('fs');
// const defaults = {
//     flags: 'r',
//     encoding: null,
//     fd: null,
//     mode: 0o666,
//     autoClose: true,
//     highWaterMark: 64 * 1024
//   };
//   var st=fs.createReadStream('index.txt', { start: 0, end: 9 });
//   console.log(st);


// fs.mkdir('testDir/r',(err)=>{
//     if(err) throw err;
//     console.log('modify success');
// })

// fs.mkdtemp('prefix',(err,floader)=>{
//     if(err) throw err;
//     console.log(floader);
// });

// const tmpDir = 'testDir';
// const { sep } = require('path');
// fs.mkdtemp('testDir'+sep, (err, folder) => {
//   if (err) throw err;
//   console.log(folder);

// });

// fs.open('index.txt','r+',(err,fd)=>{
//     if(err) throw err;
//     var buffer1=new Buffer(255);
//     fs.read(fd,buffer1,0,4,1,(err,bytesRead,buffer)=>{
//         if(err) throw err;
//         console.log(buffer1.toString());
//         console.log(bytesRead, buffer.slice(0, bytesRead).toString());
//         fs.close(fd,(err)=>{
//             if(err) throw err;
//         });
//     });
// });

// fs.readdir('testDir',(err,files)=>{
//     if(err) throw err;
//     console.log(files);
// });

// fs.readFile('index.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// fs.realpath('index.txt',(err,linkString)=>{
//     console.log(linkString);
// });

// fs.rename('index.js','index.txt',(err)=>{
//     if(err) throw err;
//     console.log('modify success');
// })

// fs.rmdir('testDir',(err)=>{
//     if(err) throw err;
//     console.log('delete success');
// })


// fs.stat('testDir',(err,stats)=>{
//     if(err) throw err;
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
// });

// var watcher=fs.watch('testDir',{encoding:'utf8'},(eventType,filename)=>{
//     if(filename){
//         console.log(eventType,filename);
//     }
// });
// watcher.on('change',(eventType,filename)=>{
//     if(filename){
//         console.log(eventType,filename);
//         if(eventType=='rename'){
//             watcher.close();
//         }
//     }
// });



// fs.open('index.txt', 'a', function(err,fd){

//  if(err){throw err;}

//  var data = '123123123 hello world';

//  var buf = Buffer.from(data);

//  fs.write(fd, buf, 0, 8, 0, function(err, bytesWritten, buffer){
//     if(err){throw err; }
//     console.log(bytesWritten);
//     console.log(buffer.toString());
//     fs.close(fd,function(err){
//     if(err){throw err; }
//     console.log('file closed');
//   });
//  });
// });

// fs.open('index.js','w',(err,fd)=>{
//     if(err){throw err; }
//     fs.write(fd,'123456789',6,'utf8',(err,written,string)=>{

//         if(err){throw err; }
//         console.log(written,string);
//     });
//     fs.close(fd,function(err){
//         if(err){throw err; }
//         console.log('file closed');
//     });
// });


fs.writeFile('index.js','----','utf8',(err)=>{
    if(err) console.log(err);
    console.log('write succeed!');
});


//fs.createReadStream('index.js');
//fs.createWriteStream('index.js');
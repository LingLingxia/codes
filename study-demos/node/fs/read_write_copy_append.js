const fs=require('fs');


// fs.unlink('1.jpg',(err)=>{
//    if(err){
//       console.log(err);
//    }
// });
// fs.rename('tmp-3/tmp-3.txt','tmp-3/tmp.txt',(err)=>{
//    if(err){
//       throw err;
//    }
// })

fs.rename('tmp-3','tmp-2',(err)=>{
   if(err){
      throw err;
   }
})
// fs.mkdir('tmp',(err)=>{
//    if(err){
//       throw err;
//    }
// })
// fs.copyFile('./merge/','./merge2',((err)=>{
//    if(err){
//       throw err;
//    }
// }));
// fs.copyFile('index.txt','test.txt',(err=>{
//    console.log(err);
// }))
// var writeStream = fs.createWriteStream('test.txt',{flag:'w+',start:10},(err)=>{
//    console.log(err);
// });

// writeStream.on('open',(fd)=>{
//    fs.appendFile(fd,'---3my writestream3---',(err)=>{
//        console.log(err);
//    })
// })

// fs.appendFile('test.txt','hello ,3Q','utf8',(err)=>{
//     console.log('succeed');
// })


// fs.open('test.txt','a',(err,fd)=>{
//     fs.appendFile(fd,'3Q very much','utf8',(err)=>{
//         console.log('succeed');
//     })
// })

// fs.copyFile('test.txt','index.txt',fs.constants.COPYFILE_EXCL,(err)=>{
//     if (err) throw err;
//     console.log('source.txt was copied to destination.txt');
// });


// fs.readFile('index.txt','utf8',(err,data)=>{
//     console.log(data);
// })

// fs.readdir('./merge/',{encoding:null,withFileTypes:true},(err,files)=>{
//     console.log(files);
//     console.log (typeof files[0]);
// })

// var imgreadstream = fs.createReadStream('1.jpg');
// imgreadstream.on('open',(fd)=>{
//   console.log('open',fd);
//   setTimeout(()=>{
//     fs.close(fd,(err)=>{

//     })
// })
// });

// imgreadstream.on('ready',()=>{
//     console.log('ready');
// });

// imgreadstream.on('end',()=>{
//     console.log('end');
// });

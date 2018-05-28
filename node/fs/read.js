const fs=require('fs');

// fs.appendFile('test.txt','hello ,3Q','utf8',(err)=>{
//     console.log('succeed');
// })


// fs.open('test.txt','a',(err,fd)=>{
//     fs.appendFile(fd,'3Q very much','utf8',(err)=>{
//         console.log('succeed');
//     })
// })

fs.copyFile('test.txt','index.txt',fs.constants.COPYFILE_EXCL,(err)=>{
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
});




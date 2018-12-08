var fs=require('fs');
/*fs.readFile('my-file.txt','utf8',function(err,contents){
	console.log(contents);
});
*/


/*var stream=fs.createReadStream('my-file.txt');
stream.on('data',function(chunk){
		console.log(chunk +'---');
});

stream.on('end',function(chunk){
	console.log('end');
});
*/

//data end 应该是内置的事件
/*var files=fs.readdirSync(process.cwd()+'/css');
files.forEach(function(file){//这个file就是文件名，字符串
	if(/\.css/.test(file)){//如果是css后缀的文件
       fs.watchFile(process.cwd()+'/'+file,{
       	  persistent:true,
       	  interval:100
       },function(){
       		console.log('-'+file+'changed');
       });
	}
});*/

var fs = require('fs');  
var path = require('path');  
var file1 = path.resolve('/css/a.css');  
//监视文件  
//1.当第一次创建监视器的时候，如果文件不存在，监视器毁掉函数会触发一次  
fs.watchFile(file1, {  
    interval: 20  
}, function(curr, prev) {  
    if (Date.parse(prev.ctime) == 0) {  
        console.log('文件被创建');  
    } else if (Date.parse(curr.ctime) == 0) {  
        console.log('文件被删除');  
    } else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)) {  
        console.log('文件有修改');  
    }  
});  
var file2 = path.resolve('/css/b.css');  
fs.watchFile(file2,  function(curr, prev) {  
    console.log('这是第二个watch，监视文件有修改');  
}); 
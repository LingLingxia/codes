var fs=require('fs')
	,stdin = process.stdin
	,stdout = process.stdout;

//返回当前进程的工作目录
fs.readdir(process.cwd(),function(err,files){
	console.log('');
	if(!files.length){
		return console.log('no files to show');
	}

	console.log(' select a file or directory');
	var stats=[];//为了避免再次执行fs.stat,在file函数中，保存stat对象
	function file(i){
		var filename=files[i];

		fs.stat(__dirname+'/'+filename,function(err,stat){//stat类这里用来判断这个文件是文件还是文件夹
			stats[i]=stat;
			if(stat.isDirectory()){
				console.log('dir: ' + i + '--' + filename);
			}else{
				console.log('   : ' + i + '--' + filename);
			}
		if(++i==files.length){

			read();//如果读取完了所有的目录，就执行read函数，等待用户输入
		}else{
			file(i);
		}
	});
	}	
	file(0);
	function read(){
		console.log('');
		stdout.write('enter your choice:');//不换行的输出
		stdin.resume();//等待用户输入
		stdin.setEncoding('utf8');

		stdin.on('data',option);//绑定data事件，回调函数option,用户输入之后去读取文件?data应该是一个事件名
	}

	function option (data){//data是用户输入的变量，
		var filename = files[Number(data)];
		if(!filename){
			stdout.write('enter your choice');
		}else{
			stdin.pause();
			if(stats[Number(data)].isDirectory()){
				fs.readdir('.'+'/'+filename,function(err,files){
					console.log('');
					console.log('('+files.length+' files)');//文件数量
					files.forEach(function(file){
						console.log('-'+file);
					});
				});

			}else {

					fs.readFile('.'+'/'+filename,'utf8',function(err,data){
						console.log('');
						console.log(data.replace(/(.*)/g,'   $1'));
					});

				}
			}
		}
	});



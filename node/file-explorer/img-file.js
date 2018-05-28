require('http').createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"image/png"});//本次请求渲染的是图片
	var stream=require('fs').createReadStream("image.png");//引用本地的image.png图片创建一个stream
	stream.on('data',function(data){
		res.write(data);//持续向客户端输送这个chunk
	});
	stream.on('end',function(){
		res.end();//图片传递完毕关闭连接
	});
}).listen(3000,function(){
	console.log('http server listen at 3000');
});
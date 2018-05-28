require('http').createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	console.log('listen at 3000');
	res.end('<h1>Hello world</h1>');
}).listen(3000);
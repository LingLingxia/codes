var contentDisposition=require('content-disposition');
var finalhandler=require("finalhandler");
var http=require("http");
var serveStatic=require('serve-static');
var serve=serveStatic("image/",{
	"index":false,
	"setHeaders":setHeaders
});


function setHeaders (res,path){
	res.setHeader('Content-Disposition',contentDisposition(path));
}

var server  = http.createServer(function onRequest(req,res){
	serve(req,res,finalhandler(req,res));
});
server.listen(3000);
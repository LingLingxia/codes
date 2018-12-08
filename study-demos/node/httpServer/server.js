const http = require('http');
const url = require('url');
const queryString = require('querystring');
const util =require('util');

http.createServer((req, res) => {
    console.log(req.headers);
    if (req.method.toLocaleLowerCase() == 'get') {
        //解析url参数
        
        let query = url.parse(req.url).query;
        if(query){
            res.end(query.toString());
        }else{
            if(req.headers.cookie){
                res.setHeader('Set-Cookie',['lang=en']);
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            for(var i in req.headers){
                res.write(`<p>${i}---${util.inspect(req.headers[i])}<p>`);
            }

            res.end();
        }
    } else if (req.method.toLocaleLowerCase() == 'post') {
        //解析http request body参数
        var data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
     
            if (req.headers['content-type'] == 'application/x-www-form-urlencoded') {
                var c = queryString.parse(data);
                res.end(data);//在这里解析或者再客户端解析,在这里解析是正常应用
                console.log(c);
            }else if(req.headers['content-type'] == 'application/json'){
                var d=JSON.parse(data);
                res.end(data);
                console.log(d);
            }
            else{
                errHandle(res);
            }
        })
    } else {
        errHandle(res);
    }
}).listen('80', (err) => {
    if (err) throw err;
    console.log('server listen at 127.0.0.1:80');
});

function errHandle(res){
    var message={
        code:2233,
        msg:'resource can\'t be found!' 
    }
    res.writeHead(404);//content-type默认是json
    res.end(JSON.stringify(message));
}
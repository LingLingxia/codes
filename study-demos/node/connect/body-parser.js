var bodyParser=rquire('body-parser');
var express=require("express");

var app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(function(req,res){
  res.setHeader('Content-Type', 'text/plain');
  res.write('you posted:\n');
  res.end(JSON.stringify(req.body, null, 2));
})
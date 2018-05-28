var request = require ( 'superagent');
request.get('http://baidu.com/s')
.send({wd:'qq'})
.end(function(res){console.log(res);});

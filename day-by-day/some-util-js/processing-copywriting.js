const fs = require('fs');

let str = fs.readFileSync('pc.js', 'utf8');


var k = str.split('\r\n');

var mode = process.argv.slice(2)[0];
if (mode == '1') {
    var m = `'${k.join("','")}'`;
    console.log(m);
    fs.writeFileSync('pc.js', m);
} else if (mode == '2') {

    var tmp = [];
    for (var i = 0; i < k.length; i++) {
        if (k[i].trim() != '') {
            tmp.push(k[i].trim());
        }
    }

    var result = "";
    for (var j = 0; j < tmp.length; j++) {
        if (j & 1) { //奇数
            result += `'des'=>'${tmp[j]}'],\r\n`;
        } else {
            result += `['title'=>'${tmp[j]}',\r\n`;
        }
    }
    console.log(result);
     fs.writeFileSync('pc.js', result);
}

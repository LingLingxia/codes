const fs = require('fs');
fs.stat('demo.txt',(err,stat)=>{
    //console.log(stat);
    console.log(stat.isBlockDevice());//对象是否描述块设备 false
    console.log(stat.isCharacterDevice());//对象是否描述字符设备 false
    console.log(stat.isDirectory());//对象是否是目录 false
    console.log(stat.isFIFO());//对象描述是否先进先出管道 false
    console.log(stat.isFile());//对象是否是文件 true
    console.log(stat.isSocket());//对象是否描述套接字 false
    console.log(stat.isSymbolicLink());//对象是否描述符号链接 false

})

const querystring = require('querystring');
//常用的 只有两个函数  parse  stringify

//这是截取的谷歌翻译的
let str = querystring.parse('view=home&op=translate&sl=en&tl=zh-CN&text=The%20ArrayBuffer%20object%20is%20used%20to%20represent%20a%20generic%2C%20fixed-length%20raw%20binary%20data%20buffer.%20You%20cannot%20directly%20manipulate%20the%20contents%20of%20an%20ArrayBuffer%3B%20instead%2C%20you%20create%20one%20of%20the%20typed%20array%20objects%20or%20a%20DataView%20object%20which%20represents%20the%20buffer%20in%20a%20specific%20format%2C%20and%20use%20that%20to%20read%20and%20write%20the%20contents%20of%20the%20buffer.');
//console.log(str);


// { view: 'home',
//   op: 'translate',
//   sl: 'en',
//   tl: 'zh-CN',
//   text: 'The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.' }


let str2 = querystring.unescape('The%20ArrayBuffer%20object%20is%20used%20to%20represent%20a%20generic%2C%20fixed-length%20raw%20binary%20data%20buffer.%20You%20cannot%20directly%20manipulate%20the%20contents%20of%20an%20ArrayBuffer%3B%20instead%2C%20you%20create%20one%20of%20the%20typed%20array%20objects%20or%20a%20DataView%20object%20which%20represents%20the%20buffer%20in%20a%20specific%20format%2C%20and%20use%20that%20to%20read%20and%20write%20the%20contents%20of%20the%20buffer.');
//console.log(str2);

let  queryObj = {
    name:'llx',
    text:'this is a text ()'
}

let stringifyObj = querystring.stringify(queryObj);
console.log(stringifyObj);

console.log(querystring.parse(stringifyObj))
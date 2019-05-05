const buf = Buffer.alloc(5, 'a');
const buf2 = Buffer.from([5,'a']);
//console.log(buf,buf2);

const arrayBuffer = new ArrayBuffer(8);//这是个啥构造函数  ,总之不是这样用的
arrayBuffer[0] = 32;//这样写只是为整个对象增加了一个属性名为0的属性,并不会影响到Buffer.from函数
//console.log(arrayBuffer);
const buf3 = Buffer.from(arrayBuffer);
//console.log(buf3);
//console.log(arrayBuffer instanceof Array);//false





const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;
const buf4 = Buffer.from(arr.buffer);
// console.log(buf4 instanceof Array);//false
// console.log(buf4);

const str = '\u00bd + \u00bc = \u00be';

  //console.log(`${str}: ${str.length} 个字符, ` + `${Buffer.byteLength(str, 'utf8')} 个字节`);

const str2 = '我是中文';
// console.log(str2.length,Buffer.byteLength(str2,'utf8'));//4 12

const str3 = 'i am a';
// console.log(str3.length,Buffer.byteLength(str3));//6 6
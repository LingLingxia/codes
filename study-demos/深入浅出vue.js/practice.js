//开头标签匹配正则
//生产正则的字符串要写\\w  直接写正则就写\w
const ncname = '[a-zA-Z_][\\w\\-.]*';
const qnameCapture = `((?:${ncname}\\:)?${ncname})`;
//const startTagOpen = new RegExp(`^<${qnameCapture}`);
//这里的问号表示0或者1

const startTagOpen = /^<((?:[a-zA-Z_][\w\-\.]*\:)?[a-zA-Z_][\w\-.]*)/;
const nreg = new RegExp(`^<${ncname}`);
console.log('<a-b id="a"></div>'.match(startTagOpen));
console.log('<a-1:b-d id="a"></div>'.match(nreg));

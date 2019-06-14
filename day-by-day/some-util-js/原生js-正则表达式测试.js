const reg = /[^\w.$]/;
console.log(reg.test('a.'));//false
console.log(reg.test('a.b'));//false
console.log(reg.test('666.'));//false
console.log(reg.test('a[66a.]'));//true
//这真的是一个很容易引起误会的正则,首先括号里面的 .$两个字符不需要转义都只代表了本身.
//所以这个正则的意思是匹配\w.$以外的字符,所以[]两个字符被匹配到(一开始还以为这个两个括号不是这个意思)
//[]里面的代表或者,后面不加限定符的情况下是匹配一个字符
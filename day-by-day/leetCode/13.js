/**
 * @param {string} s
 * @return {number}
 */

 //罗马数字转整数
var romanToInt = function(s) {
    let nums = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
    }
    let sum = 0,i = 0,len = s.length;
    while(i<len){
      let num = s[i]
      if(i+1<len){
      let nextNum = s[i+1]
           if((num==='I'&&(nextNum==='V'||nextNum==='X'))
              ||(num==='X'&&(nextNum==='L'||nextNum==='C'))
              ||(num==='C'&&(nextNum==='D'||nextNum==='M'))){
               sum  = sum + (nums[nextNum] - nums[num]);
               i+=2;
              }else{
                sum = sum +  nums[num];
                i++;
              }
      }else{
        sum = sum +  nums[num];
        i++;
      }
    }
    return sum;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));

/**
 * @param {string} str
 * @return {number}
 */
//整数转字符串
var myAtoi = function(str) {
    let s = str.trim();
    if(s==='') return 0;
    let sum = 0,positiveMax = Math.pow(2,31) - 1,negativeMax =  positiveMax + 1,len = s.length;
    let max = positiveMax;
    let positive = true;
    let i = 0;
    if(/[\d+-]+/.test(s[0])){
       if(s[0]=== '-'){
          max = negativeMax;
          positive = false;
          i ++;
       }else if(s[0]==='+'){
           i++;
       }
    }else{
        return 0;
    }
    while(i<len){
        if(/[\d]+/.test(s[i])){
         let tmp = sum*10 + Number(s[i]);
         if(tmp>max){
             sum = max;
             break;
         }else{
             sum = tmp;
             i++;
         }
        }else{
            break;
        }
    }

    return positive?sum:-sum;

};

//console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
// console.log(myAtoi("4193 with words"));
// console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("+1"));

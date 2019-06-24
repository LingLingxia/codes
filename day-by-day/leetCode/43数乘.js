/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1==='0'||num2==='0') return '0';
      function add(num1,num2){
          let prev = 0,i = num1.length-1,j = num2.length - 1;
          let str = '';
          while(i>=0||j>=0){
                let n1 = num1[i] || 0,n2 = num2[j] || 0;
                let tmp = Number(n1) + Number(n2) + prev;
                str = tmp%10  + str;
                prev = Math.floor(tmp/10);
                i --;j--;
          }
          return  prev?1+str:str;
      }

      let num1NumtipyArr = ['0',num1];
      for(var i = 2;i<=9;i++){
          num1NumtipyArr[i] = add(num1NumtipyArr[i-1] ,num1);
      }

      let ret = '';
      i = 0;
      while(i<num2.length){
          let n3 = num1NumtipyArr[num2[num2.length -1 - i]].concat('0'.repeat(i));
          ret = add(ret,n3);
          i++;
      }

      return ret;
};




//最优解

var multiply = function(num1, num2) {
    if(num1 == '0' || num2 == '0') return '0';
    let arr = Array.from({length:num1.length+num2.length-1});
       arr.fill(0);
       for(let i = 0;i<num1.length;i++){//这里不需要考虑移位
        for(let j = 0;j<num2.length;j++){
            arr[i+j] += (+num1[i] * +num2[j]);
        }
    }
    let ret = '',prev = 0, tmp;
    for(i = arr.length-1;i>=0;i--){
        tmp = prev + arr[i];
        ret = tmp%10 + ret;
        prev = Math.floor(tmp/10);
      }
      return prev?prev+ret:ret;
    }
    
    
    
    console.log(multiply('24444','68987457'));//1686329398908
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
   if(dividend==(1<<31)&&divisor==-1) return -(1<<31)-1;
    var negative = (dividend^divisor)<0;
    var d1 = Math.abs(dividend);
    var d2 = Math.abs(divisor);
    var result = 0;
    for(var i = 31;i>=0;i--){
        if((d1>>i)>=d2){
            result +=1<<i;
            d1-=(d2<<i);
        }
    }
    return negative?-result:result;
};

console.log(divide(-2147483648,-1));
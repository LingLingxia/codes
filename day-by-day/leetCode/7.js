/**
 * @param {number} x
 * @return {number}
 */
//整数反转
var reverse = function(x) {
    let max = Math.pow(2,31) -1 ;
    let min = max+1;
    let positive = x>0;
    let maxNumber = positive?max:min;
    x = x>0?x:-x;
    let sum = 0;
    while(x){
        let tmp = x%10;
        sum = sum * 10 +tmp;
        x=Math.floor(x/10);
        if(sum>maxNumber){
            sum = 0;
            break;
        }
    }
    
    return positive?sum:-sum;
};
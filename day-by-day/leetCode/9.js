/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let copyX = x;
    let ret = 0;
    while(x){
        let tmp = x%10;
        ret = ret*10 + tmp;
        x=Math.floor(x/10);
    }
    return ret===copyX;
};

isPalindrome(121);
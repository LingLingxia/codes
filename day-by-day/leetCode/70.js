/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let n1 = 1,n2 = 2;
    if(n===1) return 1;
    if(n===2) return 2;
    let ret;
    for(var i = 3;i<=n;i++){
        ret = n1+n2;
        n1 = n2;
        n2 = ret; 
    }
    return ret;
};
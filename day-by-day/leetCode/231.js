/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n===1||n===2) return true;
    let mode = n%10;
    if(mode!==2&&mode!==4&&mode!==6&&mode!==8) return false;
    return isPowerOfTwo(n/2);
};
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //直接用reverse?哈哈哈
    let i = 0,j = s.length-1;
    let k;
    while(i<j){
        if(s[i]!=s[j]){
            k = s[i];
            s[i] = s[j];
            s[j] = k;
        }
        i++;
        j--;
    }
};
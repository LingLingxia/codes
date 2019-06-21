/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length||!strs[0].length) return ;
    let tmp = strs[0];
    for(var i=0;i<tmp.length;i++){
          for(var j = 1;j<strs.length;j++){
              if(strs[j][i]!==tmp[i]) return tmp.slice(0,i);
          }
    }
    return tmp;
};

longestCommonPrefix(["flower","flow","flight"]);

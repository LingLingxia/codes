/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s==='') return true;
    if(s.length === 1) return false;
    let arr = [];
    arr.push(s[0]);
    let leftSymbols = ['(','{','['];
    let rightSymbols = [')','}',']'];
    for(var i = 1 ;i<s.length;i++){
       let char = s[i];
       let index = leftSymbols.indexOf(char);
       if(index>=0){
           arr.push(char);
           continue;
       }
       index = rightSymbols.indexOf(char);
       let prev = arr.pop();
       if(prev===leftSymbols[index]){
           continue;
       }else{
           return false;
       }
    }
    return arr.length === 0?true:false;
};
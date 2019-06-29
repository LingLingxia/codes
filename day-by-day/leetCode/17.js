/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let strSrr = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let ret = [];
    function backTracking(str){
         if(str.length===digits.length){
             ret.push(str);
             return ;
         }
         let digitsIndex = str.length;
        let currentNum = strSrr[disits[digitsIndex]];
         for(var i = 0;i<currentNum.length;i++){
             let tmp = str+currentNum[i];
             backTracking(tmp);
         }
    }
    backTracking('');

};
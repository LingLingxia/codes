/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    var arr = [];
    function backTracking(current,tmp,index,len){
        if(current===target){
            arr.push(tmp.slice(0));
        }
        var sum;
        let flag = {};
        for(var i = index;i<candidates.length;i++){
            if(flag[candidates[i]]) continue;
            sum = current + candidates[i];
            if(sum>target) return ; 
            flag[candidates[i]] = true;
            tmp.push(candidates[i]);
            backTracking(sum,tmp,i+1,len+1);
            tmp.length = len;
        }
    }

    backTracking(0,[],0,0);
    return arr;
};
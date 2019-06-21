/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
     candidates.sort((a,b)=>a-b);
     let arr = [];
     function backTracking(current,tmp,index,len){
           if(current === target){
                arr.push(tmp.slice(0));
                return ;
           }
           if(current>target) return;
           let sum ;
           for(var i = index;i<candidates.length;i++){
               sum = current + candidates[i];
               if(sum>target){
                   return ;
               }
               tmp.push(candidates[i]);
               backTracking(sum,tmp,i,len+1);
               tmp.length = len;
           }
     }

     backTracking(0,[],0,0);
     return arr;
};
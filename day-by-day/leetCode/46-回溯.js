/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length<=1) return nums;
    function dp(tmp,len){
        if(len === nums.length){
            arr.push(tmp.slice(0));
            return;
        }
         for(var i = 0;i<nums.length;i++){
             if(visited[i]) continue;
             tmp.push(nums[i]);
             visited[i] = 1;
             dp(tmp,len+1);
             visited[i] = 0;
             tmp.length = len;
         }
    }
    let visited = Array.from(nums.length);
    visited.fill(0);
    let arr = [],tmp = [];
    dp(tmp,0); 

    return arr;
};
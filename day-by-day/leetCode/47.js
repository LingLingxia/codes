/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums.length<=1) return [nums];
    let [arr,tmp] = [[],[]];
    let visit = Array.from({length:nums.length});
    visit.fill(0);
    function dp(tmp,len){
        if(len === nums.length){
            arr.push(tmp.slice(0));
            return ;
        }
        let flagObj = {};//只在本轮生效
        for(var i =0;i<nums.length;i++){
             if(visit[i]||flagObj[nums[i]]) continue;
             
             visit[i] = 1;
             flagObj[nums[i]] = true;
             tmp.push(nums[i]);
             dp(tmp,len+1);
             visit[i] = 0;
             tmp.length = len;
        }
    }

    dp(tmp,0);
    
    return arr;
};

permuteUnique([1,1,2]);
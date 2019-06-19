/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let tmp = 0,ret = nums[0];
    for(var i = 0;i<nums.length;i++){
        tmp = tmp + nums[i];
        if(tmp>ret) ret = tmp;
        if(tmp<0) tmp = 0;
    }

    return ret;
};
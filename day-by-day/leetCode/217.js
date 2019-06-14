/**
 * @param {number[]} nums
 * @return {
 * 
 * 效果不佳
// var containsDuplicate = function(nums) {
//     let tmp = {};
//     for(var i = 0;i<nums.length;i++){
        
//         tmp[nums[i]] = tmp[nums[i]] || 0;
//         tmp[nums[i]] ++;
//         if(tmp[nums[i]]===2) return true;
//     }
//     return false
// };


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const s = new Set(nums);
    return s.size !== nums.length;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
//解法1 splice
var removeDuplicates = function(nums) {
    let i = 1;
    while(i<nums.length){
         if(nums[i]===nums[i-1]){
             nums.splice(i,1);
         }else{
             i++
         }
    }
    return nums.length;
};


//解法2双指针

var removeDuplicates = function(nums) {
    if(nums.length===0) return 0;
    let i = 1,j = 1;
    while(j<nums.length){
        if(nums[j]===nums[j-1]){
            j++;
        }else{
            if(i!=j){
              nums[i] = nums[j];
            }
            i++;
            j++;
        }
    }
    nums.length = i;
    return i;
};
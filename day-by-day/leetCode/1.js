/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0;i<nums.length;i++){
      let targetNumber = target-nums[i];//不要在循环里面进行重复的加法运算
      for(var j =i+1;j<nums.length;j++){
        if(nums[j]==targetNumber){
          return [i,j]
        }
      }
    }
    return [];
};

console.log(twoSum([2,3,4],6));//0,2
console.log(twoSum([0,0,9],9));//0,2
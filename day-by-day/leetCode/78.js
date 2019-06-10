/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ret = [[]];
   for(var i = 0 ;i<nums.length;i++){
      let tmp = []
       ret.forEach(item=>{
           let k = item.slice(0);
           k.push(nums[i]);
           tmp.push(k);
       });
       ret = ret.concat(tmp);
   }  
   return ret;
};
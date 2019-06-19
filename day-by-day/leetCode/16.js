/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>{
        return a-b;
    });
    let ret = null;
    for(var i = 0;i<nums.length;i++){
          let j = i+1,k = nums.length - 1;
          //我们需要两个数 最优为  nums[j] + nums[k] === changeTarget
          while(j<k){
              let tmp = nums[j] + nums[k] + nums[i];
              if(ret===null){
                   ret = tmp;
              }
              if(Math.abs(tmp-target)<Math.abs(ret-target)){
                  ret = tmp;
              }
              if(tmp===target){
                  return target;
              }else if(tmp>target){
                   k--;
              }else{
                   j++; 
              }
          }
        }
        return ret;
};

console.log(threeSumClosest(
    [1,2,4,8,16,32,64,128],
     82
    ));
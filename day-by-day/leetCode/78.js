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


//回溯法
var subsets = function(nums) {
  let ret = [[]];
  function dp(tmp,index,len){
      if(tmp.length===nums.length) return ;//无意义
      for(var i = index;i<nums.length;i++){
        tmp.push(nums[i]);
        ret.push(tmp.slice(0));
        dp(tmp,i+1,len+1);
        tmp.length = len;
      }
  }
  dp([],0,0);
  return ret;
};

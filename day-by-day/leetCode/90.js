/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    function isValidCount(arr,target,n){
        let index = 0,count=0;
        let k;
        while(true){
            k = arr.indexOf(target,index);
            if(k===-1){
             break;
            }else{
             index = k+1;
             count++;
            }
        }
        return count === n;
    }

    let ret = [[]];
    let flag = {};
   for(var i = 0 ;i<nums.length;i++){
      let tmp = [];
      let n = nums[i];
      if(!flag[n]){//如果没有出现过
       ret.forEach(item=>{
           let k = item.slice(0);
           k.push(n);
           tmp.push(k);
       });
       flag[n] = 1;
    }else{//已经出现过,只在等于这个count的时候添加
       ret.forEach(item=>{
           if(isValidCount(item,n,flag[n])){
            let k = item.slice(0);
            k.push(n);
            tmp.push(k);
           }
       });
       flag[n]++;
    }
       ret = ret.concat(tmp);
   }  
   return ret;
};

console.log(subsets([1,2,2]));
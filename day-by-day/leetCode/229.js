/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var majorityElement = function(nums) {
//     let len = nums.length;
//      if(len===1) return nums;
//      if(len===2){
//          if(nums[0]===nums[1]){
//              return nums.slice(1);
//          }else{
//              return nums;
//          }
//      }

//      let FlagCount = Math.ceil(len/3);
//      if(len%3===0){
//          FlagCount ++;
//      }
//      function candi(value){
//          this.value = value;
//          this.count = 1;
//      }
//      let candidates = [];
//      function findCadidateNums(startIndex){
//          if(candidates.length===2) return startIndex;
//           let i = startIndex;
//           while(i<len){
//              let num = candidates.find(x=>x.value === nums[i]);
//              if(!num){
//                  candidates.push(new candi(nums[i]));
//                  i++;
//                  if(candidates.length===2) {
//                      return i;
//                  }
//              }else{
//                  i++;
//                  num.count++;
//              }
//           }
//           return i;
//      }
//      function  filterNums(index){
//         index = findCadidateNums(index);
//         if(candidates.length<2){
//             return ;
//         }
//          while(index<len){
//              let n = nums[index];
//              let flag = false;
//              candidates.forEach(item=>{
//                  if(item.value===n){
//                      item.count++;
//                      flag = true;
//                  }
//              })
//                 if(flag){
//                   index++;
//                 }else{
//                   candidates =  candidates.filter(item=>{
//                      item.count--;
//                      return item.count>0;
//                  });
//                 index++;
//                 index = findCadidateNums(index);
//                 if(candidates.length<2){
//                     return ;
//                 }
//              }
//          }
//      }
//      filterNums(0);
//      let tmpCount = {};
//      candidates.forEach(item=>{
//          tmpCount[item.value] = 0;
//      });
//      for(var i=0;i<len;i++){
//          if(typeof tmpCount[nums[i]]==='number'){
//              tmpCount[nums[i]]++;
//          }
//      }
//      let ret = [];
//      Object.keys(tmpCount).forEach(item=>{
//          if(tmpCount[item]>=FlagCount){
//              ret.push(Number(item));
//          }
//      })
//      return ret;
// };

var majorityElement = function(nums) {
    let len = nums.length;
    let FlagCount = Math.ceil(len/3);
     if(len%3===0){
         FlagCount ++;
     }
    let ret = [];
    let tmp = {};
    for(var i =0;i<nums.length;i++){
       let n = nums[i];
       tmp[n] = tmp[n] || 0;
       tmp[n]++;
    }
    Object.keys(tmp).forEach(item=>{
        if(tmp[item]>= FlagCount){
            ret.push(Number(item));
        }
    })
    return ret;
}

console.log(majorityElement([1,2,2,4])); 
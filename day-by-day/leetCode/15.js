//三数之合
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//第三次尝试
var threeSum = function(nums){
  nums.sort((a,b)=>a-b);
  let ret = [];
  var k = 0
  while(k+1<nums.length){
    let i = k+1;let j = nums.length-1;
    if(nums[k]>0) break;
    while(i<j){
       if(nums[k]+nums[i]+nums[j]>0){
          j--;
       }else if(nums[k]+nums[i]+nums[j]<0){
           i++;
       }else{
          ret.push([nums[k],nums[i],nums[j]]);
          while(nums[i]===nums[i+1]){
            i++;
          }
          while(nums[j]===nums[j-1]){
            j--;
          }
          i++;
          j--;
       }
    }
    while(k+1<nums.length&&nums[k]===nums[k+1]){
      k++;
    } 
    k++;
  }
  return ret;
}

//console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]));
//console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6,0,0]));

//第二次尝试
// var threeSum2 = function(nums) {
// //插入排序  同一数字不能超过2 ，0 除外
// //有0 要找相反数
// //无0 两负一正，或者两正一负
//   let ret = [];
//   let negative = [];
//   let positive = [];
//   let zeroCount = 0;

//   let numberCount = {};

//   function caculateNumber(arr){
//      for(var i = 0;i<arr.length;i++){
//        for(var j = i+1;j<arr.length;j++){
//          let target = arr[i]+arr[j];
//          if(numberCount[-target]&&notInRet(arr[i],arr[j],-target)){
//            ret.push([arr[i],arr[j],-target]);
//          }
//        }
//      }
//   }

//     function notInRet(n1,n2,n3){
//        for(var j = 0;j<ret.length;j++){
//           if(ret[j].includes(n1)&&ret[j].includes(n2)&&ret[j].includes(n3)){
//             return false;
//           }
//        }
//        return true;
//    }
//   for(var i =0;i<nums.length;i++){
//      if(nums[i]!==0){
//        if(numberCount[nums[i]]==2){
//          continue;
//        }
//        numberCount[nums[i]]= numberCount[nums[i]]==1?2:1;
//         if(nums[i]<0){
//           negative.push(nums[i]);
//         }else if(nums[i]>0){
//           positive.push(nums[i]);
//         }
//       }else{
//         zeroCount++;
//       }
//   }
//   if(zeroCount>=3){
//     ret.push([0,0,0]);
//   }
//   caculateNumber(negative);
//   caculateNumber(positive);
//   if(zeroCount>=1){
//     let flagArr = negative.length>positive.length?positive:negative;
//     for(var k = 0;k<flagArr.length;k++){
//       if(numberCount[flagArr[k]]==2){
//         numberCount[flagArr[k]]--;
//         continue;
//       }
//       if(numberCount[-flagArr[k]]){
//         ret.push([0,flagArr[k],-flagArr[k]]);
//       }
//     }
//   }
//   return ret;

// }


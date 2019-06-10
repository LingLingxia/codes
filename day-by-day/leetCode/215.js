/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
      function swap(arr,r1,r2){
          let tmp = arr[r1];arr[r1]= arr[r2];arr[r2] = tmp;
      }
      function quickSort(arr,left,right){
          if(left==right) return arr[left];
          let povik = Math.floor(Math.random()*(right-left+1)) + left;
          swap(arr,right,povik);
          let small = left - 1;
          for(let index = left;index<right;index++){
             if(arr[index]>arr[right]){//把大于arr[povik]的都换到small的左边
                 small ++;
                 if(small!=index){
                     swap(arr,index,small);
                 }
             }
          }
          small++;
          swap(arr,small,right);
          if(small === k-1){
           return arr[small];
          }else if(small<k-1){
           return  quickSort(arr,small+1,right);
          }else {
            return quickSort(arr,left,small-1);
          }
      }

      return quickSort(nums,0,nums.length-1);
};


//复杂版的要来了
// var findKthLargest = function(nums, k) {
//     function swap(arr,r1,r2){
//         let tmp = arr[r1];arr[r1]= arr[r2];arr[r2] = tmp;
//     }
   
// function quickSort(arr,left,right){
//     if(left>=right ) return arr[left] ;
//     let p = partionSort(arr,left,right);
//    if(p===k-1){
//        return arr[p];
//    }else if(p<k-1){
//        return quickSort(arr,p+1,right);
//    }else{
//        return quickSort(arr,left,p-1);
//    }
//  }
//  function partionSort(arr,left,right){
//      let i = left,j = right-1;
//      while(i<j){
//          while(arr[j]<=arr[right]&&j>i){
//              j--;
//          }
//          while(arr[i]>=arr[right]&&i<j){
//              i++;
//          }
//          if(i==j){
//            break;
//          }
//          swap(arr,i,j);
//      }
//      while(arr[i]>arr[right]) i++;
//      if(arr[i]<arr[right]){
//          swap(arr,i,right);
//          return i ;
//      }
//      return right;
//  }

//  return quickSort(nums,0,nums.length-1);
 
// };

//console.log(findKthLargest([3,2,1,5,6,4],2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));
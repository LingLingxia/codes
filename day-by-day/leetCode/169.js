/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     //快速排序,找到第n/2个数
     //从小到大或者从大到小都可以
     //这里选从小到大
     let flagIndex = Math.floor(nums.length/2);
     return findIndexNum(nums,0,nums.length-1);
     function swap(arr,r1,r2){
         let tmp = arr[r1];
         arr[r1]= arr[r2];
         arr[r2] = tmp;
     }
     function findIndexNum(arr,start,end){
        if(start===end) return arr[start];
        // let povik = Math.floor(Math.random()*(end-start+1)) + start;
        // swap(arr,povik,end);
        let small = start-1;
        for(var i = start;i<end;i++){
             if(arr[i]<arr[end]){
                small++;
                if(small!=i){
                    swap(arr,small,i);
                }
             }
        }
        small ++ ;
        swap(arr,small,end);
        if(small===flagIndex){
            return arr[small];
        }else if(small<flagIndex){
            return findIndexNum(arr,small+1,end);
        }else{
            return findIndexNum(arr,start,small-1);
        }
     }   
};

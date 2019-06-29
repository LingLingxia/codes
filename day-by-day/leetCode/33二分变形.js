/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function findPovik(left,right){
        if(left===right){
            return left;
        }
        let mid = Math.floor((left + right)/2);
        if(nums[mid]>=nums[left]&&nums[mid]>=nums[right]){
           return findPovik(mid+1,right);
        }else if(nums[mid]<=nums[left]&&nums[mid]<=nums[right]){
            return findPovik(left,mid);
        }else {
            return left;
        }
    }  
    
    function divide(left,right){
        if(left>right) return -1;
        let mid = Math.floor((left + right)/2);
        if(nums[mid]===target) return mid;
        if(target<nums[mid]){
            return divide(left,mid-1);
        }else{
            return divide(mid+1,right);
        }
    }
    

    let povik = findPovik(0,nums.length-1);
    if(povik===0|| target<nums[0]){
         return divide(povik,nums.length-1);
    }else{
        return divide(0,povik-1);
    }

    
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//优秀代码,感觉自己分类的时候逻辑不是特别清楚
var search = function(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while(left <= right) {
        
        let mid = Math.floor(left + (right - left) / 2);
        if(nums[mid] === target) {
            return mid;
        }
        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if(nums[right] >= target && nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1
};


//看了别人答案之后重写
var search = function(nums, target) {
    let left = 0,right = nums.length -1;
    while(left<right){
        if(target===nums[left]) return left;
        if(target===nums[right]) return right;
        let mid = Math.floor((left+right)/2);
         if(target===nums[mid]){
             return mid;
         } 
         if(nums[mid]>nums[left]){
             if(target>nums[left]&&target<nums[mid]){
                right = mid -1;
             }else{
                 left = mid +1;
             }
            //   if(target<nums[left]){
            //       left = mid+1;
            //   }else{
            //       if(target>nums[mid]){
            //          left = mid+1;
            //       }else{
            //          right = mid-1;
            //       }
            //   }
         }else{
             if(target>nums[mid]&&target<nums[right]){
                 left = mid + 1;
             }else{
                 right = mid -1;
             }
            //   if(target<nums[left]){
            //       if(target<nums[mid]){
            //          right = mid-1;
            //       }else{
            //          left = mid +1;
            //       }
            //   }else{
            //       right = mid -1;
            //   }
         }
    }
    return -1;
}
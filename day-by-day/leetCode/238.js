/**
 * @param {number[]} nums
 * @return {number[]}
 */

//你想到了走两遍,你想到了左右相乘,没有想到有更加简单巧妙的实现方式.

var productExceptSelf = function(nums){
    let len = nums.length;
    let left = 1,right = 1;
    let output = [];//如果边界需要用到arr[-1],与其特殊处理边界值,不妨另外开辟一个数组外的变量来做中介
    for(var i = 0;i<len;i++){
        output[i] = left;//在下次遍历的时候是可以改掉的,这里做一个中介值
        left = left*nums[i];
    }
    for(var j = len-1;j>=0;j--){
        output[j] = output[j]*right;
        right = right*nums[j];
    }
    return output;
}


 //这个思路还可以,没有一个简单的算法
// var productExceptSelf = function(nums) {
//     if(nums.length<=2) return nums.reverse();
//     let len = nums.length;
//     let leftStart = [nums[0]];
//     let rightStart = [nums[len-1]];
//     for(var i = 1;i<len;i++){
//         leftStart.push(leftStart[i-1]*nums[i]);;
//         rightStart.unshift(rightStart[0]*nums[len-i-1])
//     }
//     let ret = [];
//     for(var i =1;i<len-1;i++){
//        ret.push(rightStart[i+1]*leftStart[i-1]);
//     }
//     ret.unshift(rightStart[1]);
//     ret.push(leftStart[len-2]);
//     return ret;
// };
console.log(productExceptSelf([223,1,0]))
;
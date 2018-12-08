//旋转数组的最小数  原来很多都不需要用递归,直接用循环就好,只涉及一维指针移动,不涉及数据保存,就不必用递归
var a=[11,12,14,16,19,3,4,5,6,9,10];
var b=[4,5,6,7,8];
var c=[1,1,1,0,1];
// function getMin(arr,left,right){
//     if(left+1==right) return arr[right];
//     var min=Math.floor((left+right)/2);
//     if(arr[min]>arr[left]){
//         return getMin(arr,min,right);
//     }else{
//         return getMin(arr,left,min);
//     }
// }

// function findMinNum(arr){
//     var len=arr.length;
//     if(arr[0]<arr[len-1]){
//         return arr[0];
//     }else{
//         return getMin(arr,0,len-1);
//     }
// }

function findMinNum(arr){
    var left=0,right=arr.length-1;
    var ret=0;
    while(arr[left]>arr[right]){
        if(left+1==right) {
            ret=right;
            break;
        }
        var mid=Math.floor((left+right)/2);
        if(arr[mid]==arr[left]&&arr[left]==arr[right]){
            return minInorder(arr);
        }
        if(arr[mid]>arr[left]){//mid在大数组
            left=mid
        }else if(arr[mid]<arr[right]){//mid在小数组
            right=mid;
        }
    }
    return arr[ret];

}

function minInorder(arr){
    var result=arr[0];
    for(var i=1;i<arr.length;i++){
        result=arr[i]<result?arr[i]:result;
    }
    return result;
}

console.log(findMinNum(a));
console.log(findMinNum(b));

console.log(findMinNum(c));
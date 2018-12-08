//二分查找 比较简单,但是也有坑
var a=[2,3,4,5,8,9,11,12,13,14,15];
var b=[1,2,3,4];
function splitSearch(arr,n){
    if(!(arr instanceof Array)||typeof n !='number'){
        throw new Error ('invalid param');
    }
    var start=0,end=arr.length-1;
    while(start<=end){
        if(start==end){
            if(n===arr[start]) return start;
            return -1;
        }

        var mid=Math.floor((start+end)/2);
        if(arr[mid]===n){
            return mid; 
        }else if(arr[mid]>n){
            end=mid-1;
        }else{
            start=mid+1;
        }
        
    }

    return -1;
}

// console.log(splitSearch(a,2));
// console.log(splitSearch(a,0));
// console.log(splitSearch(a,-2));
// console.log(splitSearch(a,15));
// console.log(splitSearch(a,14));
console.log(splitSearch(a,10));
// console.log(splitSearch(a,11));

// console.log(splitSearch(b,0));
// console.log(splitSearch(b,1));
// console.log(splitSearch(b,2));
// console.log(splitSearch(b,3));
// console.log(splitSearch(b,4));
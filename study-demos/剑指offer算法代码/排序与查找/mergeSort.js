//归并排序  O(nlogn) 稳定

var a=[0,5,7,9,4,34,6,77,4,3,4];
var b=[3,2];

function mergeSort(arr){
    if(arr.length<2) return arr;
    var mid=Math.floor(arr.length/2);
    var left=arr.slice(0,mid);
    var right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    var ret=[];
    while(left.length&&right.length){
        if(left[0]<right[0]){
             ret.push(left[0]);
             left.shift();   
        }else{
            ret.push(right[0]);
            right.shift();
        }
    }
    while(left.length){
        ret.push(left[0]);
        left.shift(); 
    }
    while(right.length){
        ret.push(right[0]);
        right.shift();
    }
    // var i=0,j=0,k=0;
    // while(i<left.length&&j<right.length){
    //     if(left[i]<right[j]){
    //         ret[k++]=left[i++];
    //     }else{
    //         ret[k++]=right[j++];
    //     }
    // }

    // while(i<left.length){
    //     ret[k++]=left[i++];
    // }
    // while(j<right.length){
    //     ret[k++]=right[j++];
    // }
    return ret;
}

a=mergeSort(a);
b=mergeSort(b);
console.log(a);
console.log(b);
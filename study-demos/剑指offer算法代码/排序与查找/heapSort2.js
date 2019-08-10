function swap(arr,l1,l2){
    var tmp = arr[l1];
    arr[l1] = arr[l2];
    arr[l2] = tmp;
}

function heapify(arr,x,len){
    var l = x*2+1;
    var r = x*2+2;
    var largest = x;
    if(l<=len&&arr[l]>arr[largest]){
        largest = l;
    }
    if(r<=len&&arr[r]>arr[largest]){
        largest = r;
    }
    if(largest!=x){
        swap(arr,x,largest);
        heapify(arr,largest,len);
    }
}

function heapSort(arr){
 var len = arr.length;
 for(var i = Math.floor(len/2)-1;i>=0;i--){
     heapify(arr,i,len-1);
 }
 for(var j = len-1;j>=1;j--){
     heapify(arr,0,j);
     swap(arr,0,j);
 }
}

let a = [3,2,5,8,3,4,11,-9,74,200,6,7];
//let a = [3,4,11,-9,74,200,6,7]
heapSort(a);
console.log(a);
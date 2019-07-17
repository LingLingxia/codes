function swap(arr,l1,l2){
    let tmp = arr[l1];
    arr[l1]= arr[l2];
    arr[l2]=tmp;
}

function heapify(arr,x,len){
    var l = 2*x +1,
        r = 2*x +2,
        largest = x;
    if(l<len && arr[l] > arr[largest]){
        largest = l;
    }
    if(r<len && arr[r]>arr[largest]){
        largest = r;
    }
    if(largest!=x){
        swap(arr,largest,x);
        heapify(arr,largest,len);
    }
}

function heapSort(arr){
    var heapSize = arr.length;
    for(var i = Math.floor(heapSize/2) -1;i>=0;i--){
        heapify(arr,i,heapSize);
        console.log(i,'---',arr);
    }
    for(var j = heapSize -1;j>=1;j--){
        swap(arr,0,j);
        heapify(arr,0,j);
    }
}

//let a = [3,2,5,8,3,4,11,-9,74,200,6,7];
let a = [3,4,11,-9,74,200,6,7]
heapSort(a);
console.log(a);
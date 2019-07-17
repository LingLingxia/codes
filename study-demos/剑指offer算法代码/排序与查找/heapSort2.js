function swap(arr,l1,l2){
    let tmp = arr[l1];
    arr[l1] = arr[l2];
    arr[l2] = tmp;
}

function heapify(arr,x,len){
    let l = x*2 + 1,
        r = x*2 + 2,
        largest = x;
        if(l<len&&arr[l]>arr[largest]){
            largest = l;
        }
        if(r<len&&arr[r]>arr[largest]){
            largest = r;
        }
        if(x!=largest){
            swap(arr,x,largest);
            heapify(arr,largest,len);
        }
    
}

function heapSort(arr){
    for(var i = Math.floor(arr.length/2) - 1;i>=0;i--){
        heapify(arr,i,arr.length);
    }
    for(var j = arr.length-1;j>=1;j--){
        swap(arr,0,j);
        heapify(arr,0,j);
    }
}

//let a = [3,2,5,8,3,4,11,-9,74,200,6,7];
let a = [3,4,11,-9,74,200,6,7]
heapSort(a);
console.log(a);
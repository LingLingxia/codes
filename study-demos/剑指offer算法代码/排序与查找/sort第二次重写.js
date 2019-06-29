// 快速排序


let  arr = [1,2,3,4,5,-2,-5,-9,-9,0,2,1,1,2,4,-9,-66,-8,-999];
function swap(arr,l1,l2){
    let tmp = arr[l1];
    arr[l1]= arr[l2];
    arr[l2]=tmp;
}
function quickSort(arr,left,right){
     if(left>=right) return ;
     let povik = Math.floor(Math.random(right - left + 1)) + left;
     swap(arr,povik,right);
     let small = left-1;
     for(var i = left;i<right;i++){
         if(arr[i]<arr[right]){
             small ++;
             if(small!==i){
                swap(arr,small,i);
             }
         }
     }
     small++;
     swap(arr,small,right);
     quickSort(arr,left,small-1);
     quickSort(arr,small+1,right);
}

// quickSort(arr,0,arr.length-1);
// console.log(arr);

function merge(arr){
     if(arr.length <=1) return arr;
     let mid = Math.floor((arr.length-1)/2);
   return  mergeSort(merge(arr.slice(0,mid+1)), merge(arr.slice(mid+1,arr.length)));
}

function mergeSort(leftArr,rightArr){
 let ret = [],i = 0,j = 0;
 while(i<leftArr.length||j<rightArr.length){
     if(j===rightArr.length||leftArr[i]<=rightArr[j]){
         ret.push(leftArr[i++]);
     }else{
         ret.push(rightArr[j++]);
     }
 }
    return ret;
}

//console.log(merge(arr));
//console.log(mergeSort([1,2],[3,4]));

function selectSort(arr){//不稳定
    for(var i = 0;i<arr.length-1;i++){
        let index = i;
        for(var j = i+1;j<arr.length;j++){
            if(arr[j]<arr[index]){
                index = j;
            }
        }
        swap(arr,i,index);
    }
}


// selectSort(arr)
// console.log(arr);
function bubbleSort(arr){
    for(var i = 0;i<arr.length;i++){
        for(j = 1;j<arr.length - i;j++){
            if(arr[j]<arr[j-1]) swap(arr,j,j-1);
        }
    }
}

bubbleSort(arr);
console.log(arr);
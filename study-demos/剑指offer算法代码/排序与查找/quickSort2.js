//2019年6月8日重写,发现自己并没有吃透这个快速排序


function quickSort(arr,left,right){
    if(left>=right ) return arr[left] ;
    let mid =  Math.floor((right+left)/2);
   // console.log(left,right,'before',arr.slice(left,right+1));
    let k = partionSort(arr,mid,left,right);
   // console.log(left,right,k,arr.slice(left,right+1));
    quickSort(arr,left,k-1);
    quickSort(arr,k+1,right);
    
 }
 function partionSort(arr,mid,left,right){
     swap(arr,mid,right);
     let i = left,j = right-1;
     while(i<j){
         while(arr[j]>=arr[right]&&j>i){
             j--;
         }
         while(arr[i]<=arr[right]&&i<j){
             i++;
         }
         if(i==j){
           break;
         }
         swap(arr,i,j);
     }
     while(arr[i]<=arr[right]&&i<right){
         i++;
     }
     if(arr[i]>arr[right]){
         swap(arr,i,right);
         return i ;
     }
     return right;
 }
 
 function swap(arr,r1,r2){
     var tmp=arr[r1];
     arr[r1]=arr[r2];
     arr[r2]=tmp;
 }
 let a = [3,2,5,8,3,4,11,-9,74,200,6,7];
 //let a = [7,11,5,8,6];
 quickSort(a,0,a.length-1);
 console.log(a);

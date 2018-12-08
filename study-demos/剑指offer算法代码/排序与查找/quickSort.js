//快速排序
var a=[0,5,7,9,4,34,6,77,4,3,4];
var b=[3,2];

quickSortArr(a);
console.log(a);
quickSortArr(b);
console.log(b);
function quickSortArr(arr){
    //省略类型检查
    quickSort(arr,0,arr.length-1);
}

function quickSort(arr,start,end){
   
    if(start>=end) return ;
    var index= start+ Math.floor(Math.random() * (end - start +1));
    swap(arr,index,end);
    var small= start-1;
    for(index= start;index <end;index ++){
        if(arr[index]<arr[end]){
            small++;
            if(small!=index){
                 swap(arr,index,small);
            }
        }
    }
    small++;
    swap(arr,small,end);
    quickSort(arr,start,small-1);
    quickSort(arr,small+1,end);
}


  function swap(arr,r1,r2){
       var tmp=arr[r1];
       arr[r1]=arr[r2];
       arr[r2]=tmp;
   }

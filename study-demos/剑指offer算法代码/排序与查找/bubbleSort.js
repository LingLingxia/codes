//冒泡排序 稳定  O(n^2)

//var a=[0,5,7,9,4,34,6,77,4,3,4];
var b=[3,2];
function bubbleSort(arr){
    if(!arr||!(arr instanceof Array)) throw new Error('invalid param');
    if(arr.length<2) return;
    var tmp;
    for(var i=0;i<arr.length-1;i++){
        for(var j=1;j<arr.length-i;j++){
            if(arr[j]<arr[j-1]){
                tmp=arr[j];arr[j]=arr[j-1];arr[j-1]=tmp;
             
            }
        }
    }
}

// bubbleSort(a);
// console.log(a);

bubbleSort(b);
console.log(b);
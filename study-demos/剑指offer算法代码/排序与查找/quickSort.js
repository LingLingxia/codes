//快速排序
var a=[0,5,7,9,4,34,6,77,4,3,4];
var b=[3,2];
const a2 = [...a];
const b2 = [...b];

console.log(quickSortArr(a));
console.log(quickSortArr(b));

advancedQuickSort(a2,0,a2.length-1);
advancedQuickSort(b2,0,b2.length-1);
console.log(a2);
console.log(b2);
function quickSortArr(arr){
    //省略类型检查 ,非常简单，一看即懂啊！就是后面要递归调用quickSort容易忘记
    if(arr.length<=1) return arr;
    const pivot = Math.floor(Math.random() * arr.length);
    const left = [];
    const right = [];
    const equal = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]===pivot){
            equal.push(arr[i]);
        }else if(arr[i]<arr[pivot]){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
       
    }
    return [...quickSortArr(left),...equal,...quickSortArr(right)];
}

//原地排序 ,太难了，真服了

function advancedQuickSort(arr,left,right){
    if(left>=right) return ;
    const pivot = left + Math.floor(Math.random() * (right - left + 1));
    swap(arr,pivot,right);
    let i = left;
    let j = right-1;
    while(i<=j){
        if(arr[i]<arr[right]){
            i++;
        }else{
            swap(arr,i,j);
            j--
        }
    }
    swap(arr,i,right)
    advancedQuickSort(arr,left,i-1);
    advancedQuickSort(arr,i+1,right);
}

function swap(arr,i,j){
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

}
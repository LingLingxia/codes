//插入排序 稳定,O(n^2)

var a=[0,5,7,9,4,34,6,77,4,3,4];
function insertSort(arr){
    if(!arr||!(arr instanceof Array)) throw new Error('invalid param');
    if(arr.length<2) return;
    for(var i=1;i<arr.length;i++){
        var tmp=arr[i];
        var j=i;
        while(j-1>=0&&arr[j-1]>tmp){
            console.log(arr[j-1]);
            arr[j]=arr[j-1];j--;
            
        }
        arr[j]=tmp;
    }
}
// console.log(a);
// insertSort(a);
// console.log(a);

var c=[2,3,0];
insertSort(c);
console.log(c);
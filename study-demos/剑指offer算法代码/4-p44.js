//二维数组的查找 输入一个数字和一个数组,查找有没有出现过这个数字
var a=[];

a.push([1,2,8,9,10]);
a.push([2,4,9,12,14]);
a.push([4,7,10,13,15]);
a.push([6,8,11,15,16]);
var m,nn;
// function find(arr,n,row,col){
//     //判断输入的合法性
//     if(!arr||row<0||col<0) return ;
//     var i=col-1,j=0;
//     while(j<row&&i>=0){
//         if(arr[i][j]==n) {
//             m=i,nn=j;
//             return true;
//         }
//         if(arr[i][j]>n) i--;
//         else j++;
//     }
//     return false;
// }

// find(a,7,4,4);

function find(arr,n,row,col){
    //判断输入的合法性
    if(!arr||row<0||col<0) return ;
    var i=0,j=col-1;
    while(j>=0&&i<row){
        if(arr[i][j]==n) {
            m=i,nn=j;
            return true;
        }
        if(arr[i][j]>n) j--;
        else i++;
    }
    return false;
}

find(a,14,4,5);


console.log(m,nn);
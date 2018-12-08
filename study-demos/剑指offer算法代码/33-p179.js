//判断一个数组是不是二叉搜索树的后序遍历
var a=[7,4,6,5];

function check(arr){
    if(!(arr instanceof Array)){
        throw new Error('invalid param');
    }
    if(arr.length<=1) return true;
    var i=0,len=arr.length,root=arr[len-1];
    while(arr[i]<root&&i<len){
        i++;
    }
    //分成两段  0~i-1  i~len-1
    var j=i;
    for(;i<len;i++){
        if(arr[i]<root) return false;
    }
    return check(arr.slice(0,j))&&check(arr.slice(j,len-1));
}

console.log(check(a));
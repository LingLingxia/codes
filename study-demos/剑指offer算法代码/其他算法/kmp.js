// function getNext( arr){
//     var len=arr.length;
//     var next=new Array(len);
//     next[0]=0;//如果不匹配,应该回溯到哪一步
//     var i=1,j=0;
    
//     while(i<len){
//         if(arr[i]==arr[next[j]]){
//             i++;j++;
//             next[i]=j;
//         }else if(j==0){
//             next[i]=0;;
//             i++;
//         }else{
//             j=next[j];
//         }
//     }
//     return next;
// }

function getNext2(arr) {
    var len = arr.length;
    var next = new Array(len);
    var i = 0, j = -1;
    next[0] = -1;
    while (i < len - 1) {
        if (j == -1 || arr[i] == arr[j]) {
            i++;
            j++;
            next[i] = j;
        } else {
            j = next[j];
        }
    }
    return next;
}

var a = 'aabcaab';
var b= 'aabcaabcd';
console.log(getNext2(a));


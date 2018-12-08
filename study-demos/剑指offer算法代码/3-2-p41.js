//找出至少一个重复数,不改变数组位置
var arr=[2,3,5,4,3,2,6,7];
 
function ducplicate(arr){
    if(!arr||!arr.length) {
       console.log('输入不合法');
       return ;  
   } 
    var n=arr.length;
   for(var i=0;i<n;i++){
       if(typeof arr[i]!='number'||arr[i]<0||arr[i]>=n){
           console.log('输入不合法');
            return ;
       }
   }
   
  var start=1,end=n-1;
  while(end>=start){
      var  mid = Math.floor((start + end)/2);
      var count=countRange(arr,n,start,mid);
      if(end==start){
          if(count>1) return start;
          else break;
      }

      if(count> mid - start + 1){
          end=mid;
      }else{
          start=mid+1;
      }
  }

}

function countRange(arr,len,start,end){
    var ret=0;
    for(var i=0;i<len;i++){
        if(arr[i]>=start&&arr[i]<=end) ret ++;
    }
    return ret;
}
var ret=ducplicate(arr);
console.log(ret);
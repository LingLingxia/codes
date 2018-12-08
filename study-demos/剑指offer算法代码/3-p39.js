 // 找出至少一个重复数字
 var arr=[5,3,1,0,2,4,3];
 
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
    

    for(var i=0;i<n;i++){
        while(arr[i]!==i){
            //交换arr[i] 和arr[arr[i]]
            if(arr[arr[i]]==arr[i]) return arr[i];
            var k=arr[arr[i]];
             arr[arr[i]]=arr[i];
             arr[i]=k;
        }
    }
 }

 var ret=ducplicate(arr);
 console.log(ret);
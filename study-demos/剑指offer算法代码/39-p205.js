   function partion(arr,start,end){
       if(arr.length<=0||start<0||end<0){
           throw new Error('invalid param');
       }
       if(start==end) return start;
       var index=start + Math.floor(Math.random()* (end - start+1));
       swap(arr,index,end);
       var small=start-1;
       for(index= start;index<end;index++){
            if(arr[index]<arr[end]){
                small++;
                if(small!=index){
                    swap(arr,small,index);
                }
            }
       }
       small++;
       swap(arr,small,end);
       return small;
   }
   

   function swap(arr,r1,r2){
       var tmp=arr[r1];
       arr[r1]=arr[r2];
       arr[r2]=tmp;
   }

   function moreThanHalfNum(arr){
       //省略参数检查
       var mid=arr.length>>1;
       var start=0,end=arr.length-1;
       var index=partion(arr,start,end);
       while(index!=mid){
           if(index>start){
               end=index-1;
               index=partion(arr,start,end);
           }else{
               start=index+1;
               index=partion(arr,start,end);
           }
       }
       var cnt=0;
       for(var i=0;i<arr.length;i++){
           if(arr[i]==arr[index]){
                cnt++;
           }
       }
       if(cnt>mid) return arr[mid];

   }

   var arr=[5,2,3,5,5,5,5,4,2];
  var k= moreThanHalfNum(arr);
  console.log(k);
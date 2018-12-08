function getTranslationCount(num){
     var s=String(num);
     var counts=new Array(s.length);
     counts[s.length-1]=1;
     for(var i=s.length-2;i>=0;i--){
         var count=counts[i+1];
         var tmp=Number(s[i]+s[i+1]);
         if(tmp>=10&&tmp<=25){
             if(i<s.length-2){
                 count+=counts[i+2];
             }else{
                 count+=1;
             }
         }
         counts[i]=count;

     }

     return counts[0];
}

console.log(getTranslationCount(12258));
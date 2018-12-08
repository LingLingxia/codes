//最大的n位数


function maxN(n){
    if(n<=0||typeof n !='number') throw new Error('invalid param');
    var arr=new Array(n+1);
    for(var i=0;i<arr.length;i++){
        arr[i]=0;
    }

    while(true){
        increment(arr);
        if(arr[0]!=0){
            break;
        }
        printNum(arr);
    }
}

function increment(arr){
    for(var i=arr.length-1;i>=0;i--){
        arr[i]++;
        if(arr[i]<=9){
            break;
        }else{
            arr[i]=0;
        }
    }
}

function printNum(arr){
    var i=0,flag=false;
    var num="";
    while(i<arr.length){

        if(!flag&&arr[i]!=0){
            flag=true;
        }
        if(flag){
            num=num+arr[i];
        }
        i++;
    }
    console.log(num);

}

//maxN(-1)
// maxN(0)
//maxN(1)
// maxN(2)
 //maxN(3)

 //递归

 function oneToMaxNDigit(n){
    if(n<=0||typeof n !='number') throw new Error('invalid param');
    var arr=new Array(n);
    for(var i=0;i<=9;i++){
        arr[0]=i;
        dp(arr,n,0);
    }
 }

 function dp(arr,n,deep){
     if(deep==n-1){
         printNum(arr);
         return ;
     }
     for(var i=0;i<=9;i++){
         arr[deep+1]=i;
         dp(arr,n,deep+1);
     }
 }

 oneToMaxNDigit(3);
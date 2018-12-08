//剪绳子

function maxN(n){
    if(typeof n !='number') throw new Error('invalid param');
    if(n<2) return 0;
    if(n==2) return 1;
    if(n==3) return 2;

    var arr=new Array(n+1);
    arr[0]=0;
    arr[1]=1;
    arr[2]=2;
    arr[3]=3;

    for(var i=4;i<=n;i++){
        var max=0;
        var mid=Math.floor(i/1);
        for(var j=1;j<=mid;j++){
            var tmp= arr[j]*arr[i-j];
            max=tmp>max?tmp:max;
        }
        arr[i]=max;
    }
    return  arr[n];
}

console.log(maxN(4));
console.log(maxN(5));
console.log(maxN(6));
console.log(maxN(7));
console.log(maxN(8));
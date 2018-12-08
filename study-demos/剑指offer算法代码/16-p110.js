// function pow(a, n) {
//     n = Math.floor(n);
//     if (a == 0) {
//         if (n <= 0) throw new Error('invalid param');
//         return 0;
//     }
//     if (n == 0) {
//         return 1;
//     }
//     if (n > 0) {
//         return caculate(a, n);
//     } else {
//         var ret = caculate(a, -n);
//         return 1 / ret;
//     }

// }
// function caculate(a, n) {
//     if (n == 1) return a;
//     var mid = n>>1;
//     var result = caculate(a, mid);
//     if (n & 1) {//奇数
//         return result * result * a;
//     } else {
//         return result * result;
//     }
// }

console.log(pow(1,2));
console.log(pow(-1,2));
console.log(pow(-1,3));
console.log(pow(3,2));
console.log(pow(3,-2));


console.log(pow(-9,0));


function pow(a,n){
    n=Math.floor(n);
    if(a==0){
        if(n<=0) throw new Error('invalid param');
        return 0;
    }
    if(n==0){
        return  1;
    }

    if(n>0){
        return caculate(a,n);
    }else{
        var ret=caculate(a,-n);
        return (1/ret);
    }
}

function caculate(a,n){
    if(n==1) return a;
    var mid=n>>1;
    var ret=caculate(a,mid);
    if(n&1){
        return ret*ret*a;
    }else{
        return ret*ret;
    }
}

/**
 * @param {number} n
 * @return {number}
 */
//完全平方数
//有时候为了方便,可能需要多算一些,此时可能影响速度,却可以得到正确答案
var numSquares = function(n) {
    let f = Array.from({length:n+1});
    f[0] = 0;
    f[1] = 1;
    f[2] = 2;
    f[3] = 3;
    for(var i = 4;i<= n;i++){
        let k = Math.floor(Math.sqrt(i));
        f[i] = 1000;
        for(var j = k;j>=1;j--){
            f[i] = Math.min(f[i],f[i-j*j] + 1);
        }
    }

    return f[n];
};

//let arr = [70,90,100,144,88,554,110,245];
let arr = [3,7,12,70,245]
for(var i =0;i<arr.length;i++){
    console.log(arr[i],numSquares(arr[i]));
}

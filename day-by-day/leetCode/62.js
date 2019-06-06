/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m===0||n===0) return ;
     let dp = [];
     for(var i =0;i<m;i++){
         dp[i] = Array.from({length:n});
         dp[i][0] = 1;
     }
     for(var j = 1;j<n;j++){
         dp[0][j] = 1;
     }
     //dp[0][0] = 0;
     for(var i =1;i<m;i++){
         for(var j = 1;j<n;j++){
             dp[i][j] = dp[i-1][j] + dp[i][j-1];
         }
     }

     return dp[m-1][n-1];
}; 

console.log(uniquePaths(1,1));
console.log(uniquePaths(3,2));
console.log(uniquePaths(2,3));
console.log(uniquePaths(7,3));
console.log(uniquePaths(3,7));
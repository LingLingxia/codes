
var minPathSum = function(grid) {
    let x = grid.length;
    if(x==0) return 0;
    if(x==1) return grid[0].reduce((prev,curr)=>prev+curr,0);
    let y = grid[0].length;
    let dp = Array.from({length:x});
    dp[0] = Array.from({length:y});
    dp[0][0]= grid[0][0];

    for(let i = 1;i<x;i++){
        dp[i] = Array.from({length:y});
        dp[i][0] = grid[i][0] + dp[i-1][0];
    }
    for(let j = 1;j<y;j++){
        dp[0][j] = grid[0][j] + dp[0][j-1];
    }

    for(let i =1;i<x;i++){
        for(let j = 1;j<y;j++){
            dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j];
        }
    }
    return dp[x-1][y-1];
 };
 
console.log(minPathSum( [[1,3,1],[1,5,1],[4,2,1]]));

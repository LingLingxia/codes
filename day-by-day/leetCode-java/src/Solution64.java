import java.lang.reflect.Array;

public class Solution64 {
    public static void main(String[] args) {
        int[][] a = new int[1][1];
        System.out.println(a[0][0]);
        int[][] test = {{1,3,1},{1,5,1},{4,2,1}};
        int ans = minPathSum(test);
       System.out.println(ans);;
    }
    public static int minPathSum(int[][] grid) {

      int x = Array.getLength(grid);
      if(x==0) return 0;
      int y = Array.getLength(grid[0]);

      int[][] dp = new int[x][y];

        dp[0][0]= grid[0][0];

        for(int i = 1;i<x;i++){

            dp[i][0] = grid[i][0] + dp[i-1][0];
        }
        for(int j = 1;j<y;j++){
            dp[0][j] = grid[0][j] + dp[0][j-1];
        }

        for(int i =1;i<x;i++){
            for(int j = 1;j<y;j++){
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j];
            }
        }
          return dp[x-1][y-1];
    }
}

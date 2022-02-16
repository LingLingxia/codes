
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class Solution64 {
    public static void main(String[] args) {
        Solution s = new Solution();
         s.simplifiedFractions(50);

    }


}



class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}





class Solution {
    int [][] steps = new int[][]{
            {0,1},{1,0},{0,-1},{-1,0}
    };
    public int numEnclaves(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        boolean[][] visit = new boolean[m][n];
        int ans = 0;

        for(int i = 0;i<m;i++){
            for(int j = 0;j<n;j++){
                if(grid[i][j]==0 && !visit[i][j]){
                    Deque<int[]> deque = new LinkedList<>();
                    visit[i][j] =  true;
                    deque.offerLast(new int[]{i,j});
                    boolean valid = true;
                    int sum = 0;
                    while(!deque.isEmpty()){
                        int [] current = deque.pollFirst();
                        sum ++;
                        for(int k = 0;k< steps.length;k++){
                            int nx = steps[k][0] + current[0];
                            int ny = steps[k][1] + current[1];
                            if(nx>=0 && ny>=0 && nx <m && ny <n ){
                                if(grid[nx][ny]==0 &&!visit[nx][ny]) {
                                    visit[nx][ny] = true;
                                    deque.offerLast(new int[]{nx, ny});
                                }
                            }else{
                                valid = false;
                            }
                        }
                    }
                    if(valid){
                        ans +=sum;
                    }
                }
            }
        }
        return ans;
    }
}
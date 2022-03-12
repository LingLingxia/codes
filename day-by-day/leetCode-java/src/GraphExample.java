import java.util.Deque;
import java.util.LinkedList;

public class GraphExample {
}

class Solution_dfs {
    int [][] steps = new int[][]{
            {0,1},{1,0},{0,-1},{-1,0}
    };
    int m;
    int n;
    boolean[][] visit;
    public int numIslands(int[][] grid) {
        m = grid.length;
        n = grid[0].length;
        visit = new boolean[m][n];
        int ans = 0;
        for(int i = 0;i<m;i++){
            for(int j = 0;j<n;j++){
                if(grid[i][j]==1 && !visit[i][j]){
                    ans ++;
                    visit[i][j] =  true;
                    dfs(new int[]{i,j},grid);
                }
            }
        }
        return ans;
    }

    public void dfs(int[] current,int[][] grid){
        for(int k = 0;k< steps.length;k++){
            int nx = steps[k][0] + current[0];
            int ny = steps[k][1] + current[1];
            if(nx>=0 && ny>=0 && nx < m && ny <n && grid[nx][ny] ==1&&!visit[nx][ny]){
                visit[nx][ny]= true;
                dfs(new int[]{nx,ny},grid);
            }
        }
    }
}


class Solution_bfs {
    int [][] steps = new int[][]{
            {0,1},{1,0},{0,-1},{-1,0}
    };
    public int numIslands(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        boolean[][] visit = new boolean[m][n];
        int ans = 0;
        Deque<int[]> deque = new LinkedList<>();
        for(int i = 0;i<m;i++){
            for(int j = 0;j<n;j++){
                if(grid[i][j]==1 && !visit[i][j]){
                    ans ++;
                    visit[i][j] =  true;
                    deque.offerLast(new int[]{i,j});
                    while(!deque.isEmpty()){
                        int [] current = deque.pollFirst();
                        for(int k = 0;k< steps.length;k++){
                            int nx = steps[k][0] + current[0];
                            int ny = steps[k][1] + current[1];
                            if(nx>=0 && ny>=0 && nx <m && ny <n && grid[nx][ny] ==1 &&!visit[nx][ny]){
                                visit[nx][ny]= true;
                                deque.offerLast(new int[]{nx,ny});
                            }
                        }
                    }
                }
            }
        }
        return ans;
    }
}
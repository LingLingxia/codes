import java.util.ArrayList;
import java.util.List;

public class GraphDistExample {
}
class Solution_DIST_DFS {
    List<List<Integer>> ans = new ArrayList<>();
    int n;
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        n = graph.length;
        List<Integer>  list = new ArrayList<>();
        list.add(0);
        dfs(0,list,graph);
        return ans;
    }
    public void dfs(int current, List<Integer> arr,int[][] graph){
        if(current==n-1){
            List<Integer> result = new ArrayList<>(arr);
            ans.add(result);
        }else{
            for(int g :graph[current]){
                arr.add(g);
                dfs(g,arr,graph);
                arr.remove(arr.size()-1);
            }
        }
    }
}
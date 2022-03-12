
import com.sun.deploy.util.ArrayUtil;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class Solution64 {
    public static void main(String[] args) {
        Solution s = new Solution();

       System.out.println(s.smallestEquivalentString("parker",
               "morris",
               "parser"));
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
    public boolean[] distanceLimitedPathsExist(int n, int[][] edgeList, int[][] queries) {
        Arrays.sort(edgeList, new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[2] - o2[2];
            }
        });
        Node[] nodes = new Node[queries.length];
        for(int i = 0;i< queries.length;i++){
             nodes[i] = new Node(queries[i],i);
        }
        Arrays.sort(nodes, new Comparator<Node>() {
            @Override
            public int compare(Node o1, Node o2) {
                return o1.q[2] - o2.q[2];
            }
        });
        DisjointSet set = new DisjointSet(n);
        int k = 0;
        boolean[] ans = new boolean[queries.length];
        for(int i = 0;i< nodes.length;i++){
               while(k< edgeList.length && edgeList[k][2] < nodes[i].q[2]){
                   int x = edgeList[k][0];
                   int y = edgeList[k][1];
                   set.unicom(x,y);
                   k++;
               }
              ans[nodes[i].index] =  set.isConnected(queries[i][0],queries[i][1]);
        }
        return ans;
    }
    class Node{
        int[] q ;
        int index;
        Node(int[] q,int index){
            this.q = q;
            this.index = index;
        }
    }

    class DisjointSet{
        int[] parent;
        int n;
        DisjointSet(int n){
            this.n = n;
            this.parent = new int[n];
            for(int i = 0;i<n;i++){
                parent[i] = i;
            }
        }
        void unicom(int x,int y){
            parent[find(x)] = find(y);
        }
        boolean isConnected(int x,int y){
             return find(x) == find(y);
        }
        int find(int node){
            if(parent[node]!=node){
                parent[node] = find(parent[node]);
            }
            return parent[node];
        }
    }

}

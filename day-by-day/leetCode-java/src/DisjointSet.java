public class DisjointSet {
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

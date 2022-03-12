class DisjointSet{
    constructor(n){
        this.parent = new Array(n).fill(0).map((e,index)=>index);
        this.n = n;
    }
    find(node){
        if(this.parent[node]!=node){
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }
    isConnected(x,y){
       return this.find(x)==this.find(y);
    }
    unicom(x,y){
        this.parent[this.find(x)] = this.find(y);
    }
}


//机器人的运动范围
var globalK;
function getCount(m,n,k){
    if(typeof m!='number'||typeof n!='number'||m<0||n<0){
        throw new Error('invalid param');
    }
    if(m==0||n==0||k<0){
        return 0;
    }
    var visit=[];
    var arr=[];
    globalK=k;
    for(var i=0;i<n;i++){
        arr.push(false);
    }
    for(var j=0;j<m;j++){
        visit.push(arr.slice(0));
    }
   return  bfs(m,n,0,0,visit);
}

function bfs(m,n,x,y,visit){
    //这个格子不合法,返回0
    if(x<0||y<0||x>=m||y>=n||visit[x][y]||!check(x,y)){
        return 0;
    }
    var ret=1;
    visit[x][y]=true;
    ret+=bfs(m,n,x+1,y,visit);
    ret+=bfs(m,n,x,y+1,visit);
    ret+=bfs(m,n,x-1,y,visit);
    ret+=bfs(m,n,x,y-1,visit);
    return ret;
}

function check(x,y){
   return (checkNum(x)<=globalK&&checkNum(y)<=globalK); 
}
function checkNum(n){
    var ret=0;
    while(n>0){
        ret+=n%10;
        n=Math.floor(n/10);
    }
    return ret;
}

console.log(getCount(1,4,5));
console.log(getCount(0,0,5));
console.log(getCount(18,20,5));
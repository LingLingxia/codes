//矩阵中的路径

var a=[
    ['a','b','t','g'],
    ['c','f','c','s'],
    ['j','d','e','h']
];

var str='bfce';
var str2='acjf';
//var visit;
function findWords(martix,str){
    if(typeof str !='string'||str.length==0||martix.length<=0||!(martix instanceof Array)|| !(martix[0] instanceof Array)) throw new Error('invalid param');
    var firstRow=martix[0].length;
    var newArray=[];var visit=[];
    for(var i=0;i<firstRow;i++){
        newArray.push(false);   
    }
    visit.push(newArray);
    for(var i=1;i<martix.length;i++){
        if(!(martix[i] instanceof Array)||martix[i].length!=martix[0].length){
            throw new Error('invalid param');
        }
        visit.push(newArray.slice(0));
    }
    for(var i=0;i<martix.length;i++){
        for(var j=0;j<firstRow;j++){
            if(dfs(martix,martix.length,firstRow,str,0,i,j,visit)){
                return true;
            }
        }
    }
   return  false;

}

function dfs(arr,row,col,str,strLen,x,y,visit){

        if(strLen==str.length) return true;
        if(x>=0&&x<row&&y>=0&&y<col&&!visit[x][y]&&arr[x][y]==str[strLen]){
            visit[x][y]=true;
            strLen++;
            if(dfs(arr,row,col,str,strLen,x+1,y,visit)
                ||dfs(arr,row,col,str,strLen,x-1,y,visit)
                ||dfs(arr,row,col,str,strLen,x,y+1,visit)
                ||dfs(arr,row,col,str,strLen,x,y-1,visit)){
                    return true;
                }else{
                    visit[x][y]=false;
                    return false;
                }

        }
}
var str3="a";
console.log(findWords(a,str3)); 
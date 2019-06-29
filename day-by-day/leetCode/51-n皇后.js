/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let ret = [];
    let str = '.'.repeat(n);
    let checkerboard = Array.from({length:n});
    checkerboard.fill(str);

    function bfs(i){//i 为行数
        if(i===n){
            ret.push(checkerboard.slice(0));//一个答案;
            return ;
        }
        for(var j = 0;j<n;j++){
            if(valid(i,j)){
                   checkerboard[i] = '.'.repeat(j) + 'Q' + '.'.repeat(n-1-j);
                   bfs(i+1);
                   checkerboard[i] = '.'.repeat(n);
               }
        }
    }

    function valid(x,y){//在这一列上面没有放置
          for(var i = 0;i<x;i++){
              if(checkerboard[i][y]==='Q'||
              checkerboard[i][i+y-x]==='Q'||
              checkerboard[i][y+x-i]==='Q'
              ) return false;
          }
          return true;
    }
    bfs(0);
    return ret;
};

//console.log(solveNQueens(4));
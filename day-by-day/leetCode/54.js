/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
     let x = 0,y = 0;
     let m = matrix.length-1;//x 对应行  
     if(m<0) return matrix;
     let n = matrix[0].length-1;//y 对应列
     let mMin = 0,nMin = 0;
     let direction = [true,false,false,false];
     let arr = [];
                    //向右  向下  向左  向上

    function changeDirection(k){
        for(var i = 0;i<4;i++){
            if(i===k){
                direction[i] = true;
            }else{
                direction[i] = false;
            }
        }
    }
     while(true){
         if(mMin>m||nMin>n) break;
       // console.log(x,y,arr,mMin,nMin,m,m);
        arr.push(matrix[x][y]);
        if(y === n && direction[0]){
            changeDirection(1);
            mMin ++;
        }
        if(y === nMin && direction[2]){
            changeDirection(3);
            m--;             
        }

        if(x === m && direction[1]){
            changeDirection(2);
            n--;
        }
        if(x === mMin && direction[3]){
            changeDirection(0);
            nMin++;
        }
        if(direction[0]){
            y++;
        }
        if(direction[1]){
            x++;
        }
        if(direction[2]){
            y--;
        }
        if(direction[3]){
            x--;
        }
     }
     return arr;
};

// spiralOrder(
//     [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//    );


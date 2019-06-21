/**
 * @param {number} n
 * @return {number[][]}
 */
//这个写的太多了,
// var generateMatrix = function(n) {
//     let ret = [];
//     for(var i = 0;i<n;i++){
//         ret[i] = [];
//     }
//     let end = n*n,
//     directions = {
//         toRight:1,
//         toLeft:2,
//         toTop:3,
//         toBottom:4
//     },
//     direction = directions.toRight,
//     row = {
//         max:n-1,
//         min:0
//     },
//     column = {
//         max:n-1,
//         min:0
//     },count = 1,x=0,y=0;
//     while(count<=end){
//         ret[x][y] = count;
//         count++;
//         if(y===column.max&&direction===directions.toRight){
//             row.min++;
//             direction = directions.toBottom;
//         }

//         if(x===row.max&&direction===directions.toBottom){
//            column.max--;
//            direction = directions.toLeft;
//         }

//         if(y===column.min&&direction === directions.toLeft){
//             row.max--;
//             direction = directions.toTop;
//         }

//         if(x===row.min&&direction===directions.toTop){
//             column.min++;
//             direction = directions.toRight;
//         }
//         switch(direction){
//             case directions.toRight: y++;break;
//             case directions.toBottom: x++;break;
//             case directions.toLeft: y--;break;
//             case directions.toTop: x--;break;
//             default: break;
//         }
//     }

//     return ret;
// };

//常规解法

var generateMatrix = function(n){
    let [top,right,bottom,left,x,y,arr,count] = [0,n-1,n-1,0,0,0,[],1];
    for(var i = 0;i<n;i++){
        arr[i] = [];
    }
    while(true){
        while(y<=right){
            arr[top][y++] = count++;
        }
        if(++top>bottom) break;
         x = top;
        while( x<=bottom){
            arr[x++][right] = count ++;
        }
        if(--right <left) break;
        y = right;
        while(y>= left){
            arr[bottom][y--] = count++;
        }

        if(--bottom< top) break;
        x= bottom;
        while(x>=top){
            arr[x--][left] = count++;
        }
        if(++left >right) break;
        y = left;
    }
    return arr;
}


console.log(generateMatrix(4));
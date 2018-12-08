var r=[];
// r.push([1,2,3,4]);
// r.push([5,6,7,8]);
// r.push([9,10,11,12]);
// r.push([13,14,15,16]);
// r.push([17,18,19,20]);

r.push([4]);
r.push([5]);
function print(arr){
    var row=arr.length,col=arr[0].length;

    var cnt=0,count=row*col,x=0,y=0,left=0,right=col-1,top=0,bottom=row-1;
    while(cnt<count){
            while(y<=right){
                if(print(x,y)) return ;
                y++;
            }
            y--; x++; top++;
            while(x<=bottom){
                if(print(x,y)) return ;
                x++;
            }
            x--;y--;right--;
            while(y>=left){
                if(print(x,y)) return ;
                y--;
            }
            y++;x--; bottom--;
            while(x>=top){
                if(print(x,y)) return ;
                x--;
            }
            y++;x++;left++;
    }


    function print(x,y){
        console.log(r[x][y],x,y);
        cnt++;
        if(cnt==count){
            return true;
        }
        return false;
    }
}

print(r);
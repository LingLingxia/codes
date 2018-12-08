//正则匹配

function match(arr,pattern){
    if(typeof arr!='string' || typeof pattern != 'string' ||pattern.indexOf('**')>=0||pattern[0]=='*'){
        throw new Error('invalid param');
    }
    if(pattern==".*") return true;

    return matchCore(arr,pattern,0,0);
}

function matchCore(arr,pattern,i,j){
        if(i==arr.length&&j==pattern.length) return true;
        if(j==pattern.length&&i!=arr.length) return false;
        if(pattern[j+1]=='*'){

            if(arr[i]==pattern[j]){
                return  matchCore(arr,pattern,i,j+2)||
                        matchCore(arr,pattern,i+1,j+2)||
                        matchCore(arr,pattern,i+1,j);
            }else{
                return matchCore(arr,pattern,i,j+2)
            }

        }else{
            if(arr[i]==pattern[j]||pattern[j]=='.'){
                return matchCore(arr,pattern,i+1,j+1);
            }
            return false;
        }
}

var a='abbbbbcc';
var b='abb*cc';
console.log(match(a,b));
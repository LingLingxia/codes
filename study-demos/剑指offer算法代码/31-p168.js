var a = [];
var b = [1];


function check(a, b) { 
    var arr = [];
    var len1 = a.length, len2 = b.length, i = 0, j = 0;
    while (i < len1) {
        if(arr[arr.length-1]==b[j]){
            j++;
            arr.pop();
        }else{
            arr.push(a[i++]);
        }
    }

    while(arr.length){
        if(arr.pop()!=b[j++]) return false;
    }
    if(j==len2)  return true;

   return false;
    
}

console.log(check(a,b));
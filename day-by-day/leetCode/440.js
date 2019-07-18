
//虽然这个代码超时了,但是算法是对的!!
//193 ,99
findKthNumber(193,99);
function findKthNumber( n, k) {
    var  value = 1;
    for(var index = 1;index < k; index++){
        if (value * 10 <= n){
            value = value * 10;
            continue;
        }
        if (value+1 <= n && (Math.floor((value+1)/10) == Math.floor(value/10))){
            value = value + 1;
            continue;
        }
        value = getMax(value) + 1;
    }
    return value;
}

function getMax(n){
    n = Math.floor(n / 10);
    while (n - Math.floor(n / 10) * 10 == 9){
        n = Math.floor(n / 10);
    }
    return n;
}



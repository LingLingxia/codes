function getNumber(k){
    if(typeof k != 'number' || k<0 ){
        throw new Error('invalid param');
    }

    if(k<10) return k;
    var sum=9,i=1,cnt=1;
    while(sum<k){
        i*=10;
        cnt++;
        sum+=9*i*cnt;
    }
 
    sum=sum-9*i*cnt;
    var newK=k-sum;
    var num1=Math.floor(newK/cnt);//位数
    var num2=newK%cnt;
    var tmp= i  + num1 -1;
    if(num2==0){
        return tmp%10;
    }else{
        var str='' + (tmp +1 ) ;
        return  str.charAt(num2-1);
    }
}

var h='';
var j=0;
while(j<5001){
    h+=j;
    j++;
}
console.log(getNumber(9),h.charAt(9));
console.log(getNumber(11),h.charAt(11));

console.log(getNumber(990),h.charAt(990));
console.log(getNumber(1000),h.charAt(1000));
console.log(getNumber(764),h.charAt(764));
//console.log(h);


/**
 * @param {number[]} prices
 * @return {number}
 */
//击败了百分之4的人,看完答案快哭了
var maxProfit = function(prices) {
    let len = prices.length;
    if(len<=1) return 0;
    let f = Array.from({length:len});
    f[0] = 0;
    let min = 0;
    for(var i = 1;i<len;i++){
        f[i] = Math.max(0,prices[i]-prices[0]);
        min = Math.min(prices[i],min);
        if(prices[i]<=min){
            min = prices[i];
            f[i] = f[i-1];
            continue;
        }
        for(var j = 0;j<i;j++){
            let tmp  = Math.max(0,prices[i]-prices[j+1]);
            f[i] = Math.max(f[i],f[j]+tmp);
        }
    }

    return f[len-1];
};


var maxProfit = function(prices) {
    let sum = 0;
    for(var i = 0;i<prices.length -1;i++){
        let tmp = prices[i+1] - prices[i]
            sum += tmp>0?tmp:0;
    }
    return sum;
}
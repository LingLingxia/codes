/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<=1) return 0;
    let max = 0;
    let minLeft = prices[0];
    for(var i = 1;i<prices.length;i++){
        if(prices[i]<minLeft){
           minLeft = prices[i];
        }else if(prices[i]>minLeft){
            max = Math.max(prices[i]-minLeft,max);
        }
    }
    return max;
};
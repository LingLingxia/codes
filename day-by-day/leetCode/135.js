/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if (ratings.length <= 1) {
        return ratings.length;
    }
    var  len = ratings.length;
    var  nums = Array.from({length:len});
    nums.fill(0);
    //从前往后
    for (var i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            nums[i] = nums[i - 1] + 1;
        }
    }
    //从后往前
    var sum = nums[len - 1];
    for ( i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && nums[i] <= nums[i + 1]) {
            nums[i] = nums[i + 1] + 1;
        }
        sum+= nums[i];
    }
    return sum + len;

};
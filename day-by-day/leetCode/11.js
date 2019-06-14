/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

        let start = 0, end = height.length - 1, rs = 0, temp = 0;
        while (start < end) {	//技巧点
            if (height[start] < height[end]) {//一开始考虑错误,居然把左边的和左边的比较,右边的和右边的比较.
                temp = height[start] * (end - start);
                start++;
            } else {
                temp = height[end] * (end - start);
                end--;
            }
            if (temp > rs) {
                rs = temp;
            }
        }
        
        return rs;

};
console.log(maxArea([1,2,3,4,5,6,7,8,9,10]));//25
console.log(maxArea([10,9,8,7,6,5,4,3,2,1]));//25
console.log(maxArea([1,2,1]));//2
console.log(maxArea([2,3,10,5,7,8,9]));//36
console.log(maxArea([1,8,6,2,5,4,8,3,7]));//49
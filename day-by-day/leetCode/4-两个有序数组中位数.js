/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 //题解的解法
var findMedianSortedArrays = function(nums1, nums2) {
    var n = nums1.length;
    var m = nums2.length;
    if (n > m)  //保证数组1一定最短
    {
        return findMedianSortedArrays(nums2, nums1);
    }
    // Ci 为第i个数组的割,比如C1为2时表示第1个数组只有2个元素。LMaxi为第i个数组割后的左元素。RMini为第i个数组割后的右元素。
    var  LMax1, LMax2, RMin1, RMin2, c1, c2, lo = 0, hi = 2 * n;  //我们目前是虚拟加了'#'所以数组1是2*n长度

    while (lo <= hi)   //二分
    {
        c1 = Math.floor((lo + hi) / 2);  //c1是二分的结果
        c2 = m + n - c1;//妙啊

        LMax1 = (c1 == 0) ? -Infinity : nums1[Math.floor((c1 - 1) / 2)];
        RMin1 = (c1 == 2 * n) ? Infinity : nums1[Math.floor(c1 / 2)];
        LMax2 = (c2 == 0) ? -Infinity : nums2[Math.floor((c2 - 1) / 2)];
        RMin2 = (c2 == 2 * m) ? Infinity : nums2[Math.floor(c2 / 2)];

        if (LMax1 > RMin2)
            hi = c1 - 1;
        else if (LMax2 > RMin1)
            lo = c1 + 1;
        else
            break;
    }
    return (Math.max(LMax1, LMax2) + Math.min(RMin1, RMin2)) / 2;
    
};
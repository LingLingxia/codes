/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//对两个有序数组排序
var merge = function(nums1, m, nums2, n) {
   let i = 0,j = 0; 
   nums1.splice(m,nums1.length - m);
    while(i<nums1.length&&j<n){
        if(nums1[i]>nums2[j]){
            nums1.splice(i,0,nums2[j]);
            j++;
            i++;
        }else{
            i++;
            }
        }
    // while(j<n){
    //     nums1.push(nums2[j++]);
    // }
    if(j<n){
        nums1.push(...nums2.slice(j))
    }
};

let l1 =[1,2,3,0,0,0];
let m = 3;
let l2 = [2,5,6];
let n = 3; 
 merge(l1,m,l2,n);
 console.log(l1);
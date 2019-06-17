/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = root.val;
     function getMax(node){
         if(!node) return 0;
         let left = getMax(node.left);
         let right = getMax(node.right);
         let tmp = left + right + node.val;
         max = max.max(max,tmp);
         tmp = Math.max(left,right);
         if(tmp<0) tmp = 0;
         tmp+=node.val;
         max = Math.max(max,tmp);
         return tmp;
     }
     getMax(root);
     return max;
};
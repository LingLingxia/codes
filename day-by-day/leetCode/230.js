/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
     function getDeep(root){
         if(!root) return root;
        let left= getDeep(root.left);
         count++;
         if(count===k) return root;
         if(left) return left;
         let right = getDeep(root.right);
         return right;
     }
    return getDeep(root).val;
};
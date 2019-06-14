/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//这是一个二叉搜索数,所以需要利用它的特点来剪枝
var lowestCommonAncestor = function(root, p, q) {
    if(root===null) return root;
    if(root===p||root===q) return root;
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    if(left&&right) return root;
    return left||right;
};

//失败的尝试
var lowestCommonAncestor = function(root, p, q) {
    if(root===null) return root;
    if(root===p||root===q) return root;
    let left = null,right = null;
    if(q.val<p.val){
        left = q;
        right = p;
    }else{
        left = p;
        right = q;
    }

    if(root.val>left.val&&root.val<right.val) return root;
    left = null,right = null;
    if(root.val>q.val||root.val>p.val){
        left = lowestCommonAncestor(root.left,p,q);
    }
    if(root.val<q.val||root.val<p.val){
        right = lowestCommonAncestor(root.right,p,q);
    }
   // if(left&&right) return root;
    return left||right;
};

//人生赢家,果然最简单的最好
var lowestCommonAncestor = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p , q)
    }
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p , q)
    }
    return root
};
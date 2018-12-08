//先构建二叉树

var a = []//中序遍历  左根右

function TreeNode(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
}
var a1 = new TreeNode(4, null, null);
var a2 = new TreeNode(7, null, null);
var a3 = new TreeNode(2, a1, a2);
var a4 = new TreeNode(9, null, null);
var a5 = new TreeNode(8, a4, a3);
var a6 = new TreeNode(7, null, null);
var pRoot1 = new TreeNode(8, a5, a6);

var pRoot2 = new TreeNode(8, new TreeNode(9, null, null), new TreeNode(2, null, null));
// console.log(PRoot1);
// console.log(pRoot2);

function HasSubTree(tree1, tree2) {
    var result = false;
    if (tree1 && tree2) { 
        if (tree1.value == tree2.value) {
            result = HasIt(tree1, tree2);
        }
        if (!result) {
            result = HasSubTree(tree1.leftChild, tree2);
        }
        if (!result) {
            result = HasSubTree(tree1.rightChild, tree2);
        }
    }


    return result;

}

function HasIt(tree1, tree2) {
    if (!tree2) return true;
    if (!tree1) return false;

    if (tree1.value != tree2.value) {
        return false;
    }

    return HasIt(tree1.leftChild, tree2.leftChild) && HasIt(tree1.rightChild, tree2.rightChild);
}

console.log(HasSubTree(pRoot1, pRoot2));

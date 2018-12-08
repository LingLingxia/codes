
//根据前序遍历和中序遍历建立二叉树
var preorder = [1, 2, 4, 7, 3, 5, 6, 8];
var inorder = [4, 7, 2, 1, 5, 3, 8, 6];

function buildNode(prestart, preEnd, inStart, inEnd) {
    if (prestart > preEnd) return null;
    if (prestart == preEnd) return new TreeNode(preorder[prestart], null, null);
    var newIndex = inorder.indexOf(preorder[prestart]);
    var newPreStart = prestart + (newIndex - inStart);
    var lc = buildNode(prestart + 1, newPreStart, inStart, newIndex - 1);
    var rc = buildNode(newPreStart + 1, preEnd, newIndex + 1, inEnd);
    return new TreeNode(preorder[prestart], lc, rc);
}

function TreeNode(num, leftChild, rightChild) {
    this.num = num;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
}

var pos = buildNode(0, 7, 0, 7);
//二叉树的遍历


//先序遍历  根左右
function readTreePre(node) {
    if (node) {
        console.log(node.num);
        readTreePre(node.leftChild);
        readTreePre(node.rightChild);
    }
}
readTreePre(pos);

//中序遍历  左根右
function readTreeIn(node) {
    if (node) {
        if (node.leftChild) {
            readTreeIn(node.leftChild);
        }
        console.log(node.num);
        if (node.rightChild) {
            readTreeIn(node.rightChild);
        }
    }


}
readTreeIn(pos);
//后序遍历

function readTreeBack(node) {
    if (node) {
        if (node.leftChild) {
            readTreeBack(node.leftChild);
        }
        if (node.rightChild) {
            readTreeBack(node.rightChild);
        }
        console.log(node.num);
    }
}

readTreeBack(pos);
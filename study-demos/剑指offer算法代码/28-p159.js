function TreeNode(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
}
var a1 = new TreeNode(7, null, null);
var a2 = new TreeNode(7, null, null);
var a3 = new TreeNode(7, a1, a2);
var a4 = new TreeNode(7, null, null);
//var a5 = new TreeNode(5, null, null);
var a6 = new TreeNode(7, a4, null);
var pRoot1 = new TreeNode(7, a3, a6);


function check(node1,node2){
    if(!node1&&!node2){
        return true;
    }
    if(!node1||!node2){
        return false;
    }
    if(!node1.value!=!node2.value){
        return false;
    }

    return check(node1.leftChild,node2.rightChild)&&check(node1.rightChild,node2.leftChild);
}

console.log(check(pRoot1,pRoot1));
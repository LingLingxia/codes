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
var a6 = new TreeNode(7, new TreeNode(4, null, null), new TreeNode(9, null, null));
var pRoot1 = new TreeNode(8, a5, a6);
//        8  
//     8     7
//    9,2    4,9
//      4,7
var arr = [];
arr.push(pRoot1);
prit(arr);
//题目三,之字形
function prit(arr) {
    var currentNode = 1, nextNode = 0, ltoR = true,conArr=[];
    while (arr.length) {
        var node = arr.shift();
       // console.log(node.value);
       conArr.push(node.value);
        currentNode--;

        if (node.leftChild) {
            arr.push(node.leftChild);
            nextNode++;
        }
        if (node.rightChild) {
            nextNode++;
            arr.push(node.rightChild);
        }

        if(currentNode==0){ 
            if(ltoR){
                console.log(conArr.join(','));
            }else{
                console.log(conArr.reverse().join(','));
            }
            conArr=[];
            ltoR=!ltoR;
            currentNode=nextNode;
            nextNode=0;
        }

    }
}

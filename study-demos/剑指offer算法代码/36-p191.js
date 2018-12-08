
function TreeNode(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
}
var a1 = new TreeNode(4, null, null);
var a2 = new TreeNode(8, null, null);
var a3 = new TreeNode(6, a1, a2);
var a6 = new TreeNode(12, new TreeNode(11, null, null),null);
var pRoot1 = new TreeNode(10, a3, a6);
//        10  
//     6     12
//    4,8   11

var lastNode=null;

function Convert(node){
    if(!node||!(node instanceof TreeNode)){
        throw new Error('invalid param');
    }
    ConverNode(node);
    console.log(lastNode);
    var headNode=lastNode;
    while(headNode&&headNode.leftChild ){
        headNode=headNode.leftChild;
    }
    return headNode;
}

function ConverNode(node){
    if(node==null){
        return ;
    }
    var current=node;//划重点啊!!这里要先记录一下

    if(current.leftChild){
        ConverNode(node.leftChild);
    }
    current.leftChild=lastNode;//当前节点的左节点指向已经排好的链表的尾节点

    if(lastNode){//如果这不是一个空节点,那么它的右节点应该指向根节点,第一个是空节点
        lastNode.rightChild=current;
    } 
     lastNode=current;//排完了左节点和自己,开始排右节点
     if(node.rightChild){
         ConverNode(current.rightChild);
     }
}

var a=Convert(pRoot1);
while(a){
       console.log(a.value);
        a=a.rightChild;
}
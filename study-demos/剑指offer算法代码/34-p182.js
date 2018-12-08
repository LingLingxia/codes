function TreeNode(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
}
var a1 = new TreeNode(4, null, null);
var a2 = new TreeNode(7, null, null);
var a3 = new TreeNode(5, a1, a2);
var a6 = new TreeNode(12, new TreeNode(4, null, null), new TreeNode(9, null, null));
var pRoot1 = new TreeNode(10, a3, a6);
//        10  
//     5     12
//    4,7  
console.log(findPath(pRoot1,10));
function findPath(node,value){
    var path=[],temp=[];
    if(!node||!(node instanceof TreeNode)){
        throw new Error('invalid param');
    }
    temp.push(node.value);
    dfs(node,node.value,temp);
    return path;
    function dfs(node,currentValue,temp){
        if(currentValue==value){
            path.push(temp.join(','));
        }
        if(node.leftChild){
            temp.push(node.leftChild.value);
            currentValue+=node.leftChild.value;
            dfs(node.leftChild,currentValue,temp);
            temp.pop()
            currentValue-=node.leftChild.value;
        }

        if(node.rightChild){
            temp.push(node.rightChild.value);
            currentValue+=node.rightChild.value;
            dfs(node.rightChild,currentValue,temp);
            temp.pop()
            currentValue-=node.rightChild.value;
        }
    }
}
function treeNode(name,age,next){
    this.name=name;
    this.age=age;
    this.next=next;
}

var arr=[
    {name:'llx1',age:15},
    {name:'llx2',age:18},
    {name:'llx3',age:23}
];


var pos=new treeNode(arr[0].name,arr[0].age,null);

for (var i=1;i<arr.length;i++){
     pos=new treeNode(arr[i].name,arr[i].age,pos);
}


function dump(node){
    if(node.next!=null){
        dump(node.next);
    }
    console.log(node.age)
}
dump(pos);
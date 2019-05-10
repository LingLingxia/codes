//数字的和
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//内存消耗过大
var addTwoNumbers1 = function(l1, l2) {
    let left = [];
    let right = [];
    
    function ListNode(val){
      this.val = val;
      this.next = null;
    }

    while(l1){
      left.push(l1.val);
      l1 = l1.next;
    }

    while(l2){
      right.push(l2.val);
      l2 = l2.next;
    }

    let k =0;
    let count = 0;
    let result = [];
    //0 位是个位数

    while(k<left.length&&k<right.length){
       let tmp = left[k] + right[k] + count;
       if(tmp>=10){
        count = 1;
        result[k] = tmp%10;
       }else{
        result[k] = tmp;
        count = 0;
       }
       k++;
    }
    let tmp ;
    while(k<left.length){
      tmp = left[k]+ count;
      if(tmp===10){
        count = 1;
        result[k] = tmp%10;
      }else{
        result[k] = tmp;
        count = 0;
      }
      k++;
    }
    while(k<right.length){
      tmp = right[k]+ count;
      if(tmp===10){
        count = 1;
        result[k] = tmp%10;
      }else{
        result[k] = tmp;
        count = 0;
      }
      k++;
    }

    if(count){
      result[k] = 1;
    }
   // console.log(result);
    let start = new ListNode(result.pop());
    while(result.length){
      let next = new ListNode(result.pop());
      next.next = start;
      start = next;
    }
   return start;
};
//内存消耗过大  不要开辟新的空间
var addTwoNumbers3 = function(l1, l2) {
  function ListNode(val){
    this.val = val;
    this.next = null;
  }
  let left = null;
  let right = null;
  let tmp,count = 0;
  let pos = null;//当前指针位置
  let ret = null;//需要返回的头指针

  function common(tmp){
    if(tmp>=10){
      count = 1;
      tmp = tmp%10;
     }else{
      count = 0;
     }
    let next = new ListNode(tmp);
    if(!ret){
        ret = next;
    }
    if(!pos){
      pos = ret;
    }
    if(pos!=next ){
      pos.next = next;
      pos = next;
    }


  }
  while(l1&&l2){
    left = l1.val;
    right = l2.val;
    tmp = left + right + count;
    common(tmp);
    l1 = l1.next;
    l2= l2.next;
  }
  while(l1){

    left = l1.val;
    tmp = left +  count;
    common(tmp);
    l1 = l1.next;
  }

  while(l2){
    right = l2.val;
    tmp = right +  count;
    common(tmp);
    l2 = l2.next;
  }

  if(count){
    let next = new ListNode(1);
    pos.next = next;
    pos = next;
    console.log(tmp);
  }

  return ret;
}
//最终答案
var addTwoNumbers = function(l1, l2) {
  function ListNode(val){
    this.val = val;
    this.next = null;
  }
  let left = null;
  let right = null;
  let tmp,count = 0;
  let pos = null;//当前指针位置
  let ret = null;//需要返回的头指针

  function common(tmp,l){
    if(tmp>=10){
      count = 1;
      tmp = tmp%10;
     }else{
      count = 0;
     }
     l.val = tmp;
    let next = l;
    if(!ret){
        ret = next;
    }
    if(!pos){
      pos = ret;
    }
    if(pos!=next ){
      pos.next = next;
      pos = next;
    }


  }
  while(l1&&l2){
    left = l1.val;
    right = l2.val;
    tmp = left + right + count;
    common(tmp,l1);
    l1 = l1.next;
    l2= l2.next;
  }
  while(l1){

    left = l1.val;
    tmp = left +  count;
    common(tmp,l1);
    l1 = l1.next;
  }

  while(l2){
    right = l2.val;
    tmp = right +  count;
    common(tmp,l2);
    l2 = l2.next;
  }

  if(count){
    let next = new ListNode(1);
    pos.next = next;
    pos = next;
    console.log(tmp);
  }

  return ret;
}
function ListNode(val){
  this.val = val;
  this.next = null;
}
let l3 = new ListNode(3);
let l2 = new ListNode(4);
let l1 = new ListNode(2);
l1.next = l2;
l2.next = l3;

let l4 = new ListNode(4);
let l5 = new ListNode(6);
let l6 = new ListNode(5);
l6.next = l5;
l5.next = l4;


let ret = addTwoNumbers(l1,l6);

// let l0 = new ListNode(5);
// let l1 = new ListNode(5);
// let ret= addTwoNumbers(l0,l1);
while(ret){
  console.log(ret.val);
  ret = ret.next;
}

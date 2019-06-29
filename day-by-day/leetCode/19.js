/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 //这个解法虽然通过了但是像猜的
var removeNthFromEnd = function(head, n) {
    let postFast = head,postSlow = head;
   while(n--){
       postFast = postFast.next;
   }
   if(!postFast) {
       return head.next;
   }
   while(postFast.next){
       postFast = postFast.next;
       postSlow = postSlow.next;
   }
      postSlow.next = postSlow.next.next; 


   return head;
};


//参考答案
var removeNthFromEnd = function(head, n) {
    let dummyHead = {
        next:head
    }
    let postFast = dummyHead,postSlow = dummyHead;
   while(n--){
       postFast = postFast.next;
   }
   while(postFast.next){
       postFast = postFast.next;
       postSlow = postSlow.next;
   }
    postSlow.next = postSlow.next.next; 
   return dummyHead.next;
};


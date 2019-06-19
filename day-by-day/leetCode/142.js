/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head||!head.next) return null;
     let slow = head.next;//一定有值
     let fast = head.next.next;//不一定有值
     while(fast&&fast.next){
         if(slow===fast){
             slow = head;
             while(slow!=fast){
                 slow = slow.next;
                 fast = fast.next;
             }
             return fast;
         }
         slow = slow.next;
         fast = fast.next.next;
     }

     return null;
};
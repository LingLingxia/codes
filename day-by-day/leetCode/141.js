/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head||!head.next) return true;
    let slow = head,fast = head.next.next;
    while(fast&&fast.next){
        if(slow===fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
};
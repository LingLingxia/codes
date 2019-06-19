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
var mergeTwoLists = function(l1, l2) {
    let head = {};
    let tmp = head;
    while(l1&&l2){
        if(l1.val>l2.val){
            tmp.next = l1;
            l1 = l1.next;
        }else{
            tmp.next = l2;
            l2 = l2.next;
        }
        tmp = tmp.next
    }
    while(l1){
        tmp.next = l1;
        l1 = l1.next;
    }
    while(l2){
        tmp.next = l2;
        l2 = l2.next;
    }
    tmp.next = null;
    return head.next;
};
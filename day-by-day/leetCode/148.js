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
//在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
var sortList = function(head) {
    //左右两个是排好序的,现在合为一个
    function mergeSort(left,right){
        let ret = {} ;
        let newHead = ret;
        while(left&&right){
            if(left.val<right.val){
                ret.next = left;
                left = left.next;
            }else{
                ret.next = right;
                right = right.next;
            }
            ret = ret.next;
        }
        while(left){
            ret.next = left;
            left = left.next;
            ret = ret.next;
        }
        while(right){
            ret.next = right;
            right = right.next;
            ret = ret.next;
        }
        ret.next = null;
        return newHead.next;
    }
    //一个拆成两个
    function getMiddle(head){
        if(!head||!head.next) return head;
        let slow = head,fast=head;
        while(fast.next){
            fast = fast.next;
            if(fast.next){
                fast = fast.next;
            }else{
                break;
            }
            slow = slow.next;
        }
        let secondHead = slow.next;
        slow.next = null;
        let left = getMiddle(head);
        let right = getMiddle(secondHead)
        return mergeSort(left,right);
    }

   return getMiddle(head);
};
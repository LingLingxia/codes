/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA||!headB) return null;
     let pa = headA,pb = headB;
     while(pa!=pb){
         pa = pa.next === null?headB:pa.next;
         pb = pb.next === null?headA:pb.next;
     }
     return pa;
};



//第二种解法
var getIntersectionNode = function(headA, headB) {
    if(!headA||!headB) return null;
     let pa = headA;
     while(pa.next){
         pa = pa.next;
     }
     pa.next = headA;
     let slow = headB;
     let fast = headB;
     while(fast&&fast.next){
          slow = slow.next;
          fast = fast.next.next;
         if(slow===fast){
            slow = headB;
            while(slow!=fast){
                slow = slow.next;
                fast = fast.next;
            }
            pa.next = null;
            return fast;
         }
     }
     pa.next = null;
     return null;
};


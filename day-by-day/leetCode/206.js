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
//反转链表  
//解法一
// var reverseList = function(head) {
//     if(!head||!head.next) return head;
//     let newHead=null,currentP=head,temp = null;
//     while(currentP){
//         temp = currentP.next;
//         currentP.next = newHead;
//         newHead = currentP;
//         currentP = temp;
//     }
//     return newHead;
// }; 


//解法二
var reverseList = function(head) {
    if(!head||!head.next) return head;
    let newpoint = null;
    let newHead = null;
    function reverse(current){
        if(!current.next){
            newpoint = current;
            newHead = current;
        }else{
            reverse(current.next);
            newpoint.next = current;
            newpoint = current;
        }
    }
    reverse(head);
    newpoint.next = null;
    return newHead;
}; 

 function ListNode(val) {
    this.val = val;
    this.next = null;
 }

 let l1 = new ListNode(1);
 let l2 = new ListNode(2);
 l1.next = l2;
 console.log(reverseList(l1));
//旋转链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */



 //通过但是很慢,因为当k很大的时候,如果链表很短,那就要遍历很多遍.如果k很小.链表很长,这个解法会比较快
var rotateRight = function(head, k) {
    if(!head) return head;
        let next = head;
    let postSecond = head;
    let postFirst = head;//postFirst先走k步,当postFirst到达终点时,postSecode到达倒数第k个,它是截取后的最后一个.
    while(k){
        postFirst = postFirst.next || head;
        k--;
    }

    if(postFirst === postSecond) return head;
    while(postFirst.next){
        postFirst = postFirst.next;
        postSecond = postSecond.next;
    }
    postFirst.next = head;
    head =  postSecond.next;
    postSecond.next = null;
    return head;
};


//通过的速度很快
var rotateRight = function(head, k) {
    if(!head) return head;
    let len = 1;
    let next = head;
    while(next.next){
        len ++;
        next = next.next;
    }
    let foot = next;
    let count = len - k%len -1;//正数第这么多个
    if(k%len === 0 ) return head;//这里有一个坑,
    //从0开始数哦
    next = head;
    while(count){
        next = next.next;
        count --;
    }
     
    foot.next = head;
    head = next.next;
    next.next = null;
    return head;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//耗时太长
// var mergeKLists = function(lists) {
//     let count = 0,head = {},post = head,i,k,min;

//     while(true){
//         i = 0;
//         k = -1;
//         min = Infinity;
//         while(i<lists.length){
//             if(!lists[i]) {
//                 i++
//                 continue;
//             } 
//             if(lists[i].val<min){
//                 min = lists[i].val;
//                 k = i;
//             }
//             i++;
//         }
//        if(k!==-1){
//            post.next = lists[k];
//            post = post.next;
//            lists[k] = lists[k].next;
//        }else{
//            break;
//        }
//     }

//     return head.next||null;
// };



var mergeKLists = function(lists){
    if(lists.length===0) return null;
    function merge(left,right){
        let head = {},post = head;
        while(left&&right){
            if(left.val<right.val){
                post.next = left;
                left = left.next;
            }else{
                post.next = right
                right = right.next;
            }
            post = post.next;
        }

        while(left){
            post.next = left;
            left = left.next;
            post = post.next;
        }

        while(right){
            post.next = right;
            right = right.next;
            post = post.next;
        }
        return head.next||null;
    }

    function quickMerge(end){
        if(end===0) return ;
        let left = 0,right = end;
        while(left<right){
        lists[left] = merge(lists[left],lists[right]);   //这句话的时间复杂度为k(链表长度和)   它需要执行 n + n/2 + n/4 +.. < n+n<2n  次
                                                         //所以时间复杂度为 O(kn)
            left++,right--;
        }
        let mid;
        if(end%2===0){//end是偶数
            mid = Math.round(end/2);
        }else{
            mid = Math.round((end-1)/2);
        }
        quickMerge(mid);
    }
    quickMerge(lists.length-1);
    return lists[0];
}
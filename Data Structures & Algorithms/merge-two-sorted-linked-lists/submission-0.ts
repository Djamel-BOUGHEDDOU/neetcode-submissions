/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        if (list1 == null) return list2;
        if (list2 == null) return list1;

        let head = list1.val < list2.val ? list1 : list2;
        let prev = null;

        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                if (prev) prev.next = list1;
                prev = list1;
                list1 = list1.next;
            } else {
                if (prev) prev.next = list2;
                prev = list2;
                list2 = list2.next;
            }
        }
        if (list1 == null) {
            prev!.next = list2;
        } else {
            prev!.next = list1;
        }

        return head;
    }
}

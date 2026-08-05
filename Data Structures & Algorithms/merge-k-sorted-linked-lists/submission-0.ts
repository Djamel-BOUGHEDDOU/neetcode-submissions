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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode | null {
        if (lists.length == 0) return null;
        if (lists.length == 1) return lists[0];

        let dummy = new ListNode();

        for (let i = 0; i < lists.length; i++) {
            let prev = dummy;
            let iterator = prev.next;
            let head: ListNode | null = lists[i];
            let prev2 = head;
            let swap: boolean = true;
            while (head != null && iterator != null) {
                if (iterator.val < head.val) {
                    prev = iterator;
                    if (!swap) {
                        prev2.next = iterator;
                        swap = true;
                    }
                    iterator = iterator.next;
                } else {
                    prev2 = head;
                    if (swap) {
                        prev.next = head;
                        swap = false;
                    }
                    head = head.next;
                }
            }
            if (head == null) {
                prev2.next = iterator;
            } else {
                prev.next = head;
            }
        }

        return dummy.next;
    }
}

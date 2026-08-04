/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

export class Solution {
    reverseList(head: ListNode | null): ListNode | null {
        if (head == null) return null;

        let current = head;
        let prev = null;

        while (current != null) {
            const temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        return prev;
    }
}

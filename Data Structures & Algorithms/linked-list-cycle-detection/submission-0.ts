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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        if (head == null) return false;

        let slowPointer = head;
        let fastPointer = head.next;

        while (fastPointer != null) {
            if (slowPointer == fastPointer) return true;
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next == null ? null : fastPointer.next.next;
        }

        return false;
/* 
        let visited: Set<ListNode> = new Set();

        while (head != null) {
            if (visited.has(head)) return true;
            visited.add(head);
            head = head.next;
        }
        return false; */
    }
}

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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode | null {
        if (head == null) return null;

        const dummy: ListNode = new ListNode(0, head);

        let tempHead = dummy;

        let discoverer: ListNode | null = head;

        let tail: ListNode;

        do {
            let counter = 1;
            while (counter < k && discoverer != null) {
                discoverer = discoverer.next;
                counter++;
            }
            if (discoverer == null) {
                tempHead.next = head;
                return dummy.next;
            }
            discoverer = discoverer.next;
            // now we have the k elements
            // we reverse them

            let prev = null;
            tail = head;
            counter = 1;

            while (counter <= k) {
                const temp: ListNode = head.next!;
                head.next = prev;
                prev = head;
                head = temp;
                counter++;
            }

            //! problem here
            tempHead.next = prev;
            tempHead = tail;
        } while (discoverer != null);

        return dummy.next;
    }
}

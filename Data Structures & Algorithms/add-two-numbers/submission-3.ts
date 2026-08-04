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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        if (l1 == null) return l2;
        if (l2 == null) return l1;

        let result = l1;

        let carry = 0;
        let prev = l1;

        while (l1 != null && l2 != null) {
            const sum = l1.val + l2.val + carry;
            const digit = sum % 10;

            l1.val = digit;

            prev = l1;
            carry = Math.floor(sum / 10);

            l1 = l1.next;
            l2 = l2.next;
        }

        let proceed = l1 != null ? l1 : l2 != null ? l2 : null;

        if (proceed) {
            if (l1 == null) prev.next = l2;
            while (carry && proceed != null) {
                const sum = proceed.val + carry;
                const digit = sum % 10;

                proceed.val = digit;

                carry = Math.floor(sum / 10);

                prev = proceed;
                proceed = proceed.next;
            }
        }
        if (carry != 0) prev.next = new ListNode(carry);

        return result;
    }
}

class Solution {
  /**
   * @param {ListNode} head
   * @return {void}
   */
  reorderList(head: ListNode | null): void {
    if (head == null) return;

    let h = head;

    let slow = head,
      fast = head;

    while (fast.next != null && fast.next.next != null) {
      slow = slow.next!;
      fast = fast.next.next;
    }

    let p2 = slow;
    let prev = null;
    while (p2 != null) {
      const temp = p2.next;
      p2.next = prev;
      prev = p2;
      p2 = temp!;
    }

    while ((h as ListNode) != null) {
      const temp1 = h!.next as ListNode;
      const temp2 = prev!.next as ListNode;
      h.next = prev;
      prev!.next = temp1;
      h = temp1;
      prev = temp2;
    }
  }
}

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (head == null) return null;

        let copyHead = new Node(head.val);
        const dummy = new Node(0, copyHead);

        let seenAddrs: Map<Node, Node> = new Map();

        while (head != null) {
            copyHead.val = head.val;
            if (!seenAddrs.has(head)) {
                seenAddrs.set(head, copyHead);
            }
            if (seenAddrs.has(head.next)) {
                copyHead.next = seenAddrs.get(head.next);
            } else {
                if (head.next) {
                    const next = new Node();
                    copyHead.next = next;
                    seenAddrs.set(head.next, next);
                }
            }

            if (seenAddrs.has(head.random)) {
                copyHead.random = seenAddrs.get(head.random);
            } else {
                if (head.random) {
                    const random = new Node();
                    copyHead.random = random;
                    seenAddrs.set(head.random, random);
                }
            }

            head = head.next;
            copyHead = copyHead.next;
        }

        return dummy.next;
    }
}

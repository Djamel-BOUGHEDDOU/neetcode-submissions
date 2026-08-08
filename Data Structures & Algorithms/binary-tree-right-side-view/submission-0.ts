/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return [];

        const queue: TreeNode[] = [root];

        let res: number[] = [];

        queue.push(root);

        let index = 0;

        while (index < queue.length) {
            const levelLength = queue.length - index;

            res.push(queue[index + levelLength - 1].val);

            for (let i = 0; i < levelLength; i++) {
                const n = queue[index + i];
                if (n.left) queue.push(n.left);
                if (n.right) queue.push(n.right);
            }
            index += levelLength;
        }
        return res;
    }
}

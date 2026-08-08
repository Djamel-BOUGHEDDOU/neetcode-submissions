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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];

        const queue: TreeNode[] = [root];
        const res: number[][] = [];

        let index = 0;

        while (index < queue.length) {
            const levelSize = queue.length - index;
            const level: number[] = [];

            for (let i = 0; i < levelSize; i++) {
                const node = queue[index++];

                level.push(node.val);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            res.push(level);
        }

        return res;
    }
}

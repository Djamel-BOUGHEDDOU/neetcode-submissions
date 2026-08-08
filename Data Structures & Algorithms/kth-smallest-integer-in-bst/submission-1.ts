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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        if (root === null) return -k;

        const left = this.kthSmallest(root.left, k);

        if (left > 0) return left;

        if (left + 1 === 0) return root.val;

        const right = this.kthSmallest(root.right, Math.abs(left) - 1);

        if (right === 0) return root.val;
        return right;
    }
}

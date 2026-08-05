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
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return 1;

        return Math.max(this.maxDepth(root.left) + 1, this.maxDepth(root.right) + 1);
    }
}

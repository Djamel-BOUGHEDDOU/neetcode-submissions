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
     * @return {boolean}
     */
    isValidBST(
        root: TreeNode | null,
        min: number | null = null,
        max: number | null = null,
    ): boolean {
        if (!root) return true;

        if (min !== null && root.val <= min) return false;

        if (max !== null && root.val >= max) return false;

        return (
            this.isValidBST(root.left, min, root.val) && this.isValidBST(root.right, root.val, max)
        );
    }
}

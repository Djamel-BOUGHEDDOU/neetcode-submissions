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
    goodNodes(root: TreeNode | null, max: number | null = null): number {
        if (!root) return 0;

        let res = 0;
        if (max === null) {
            res++;
            max = root.val;
        } else {
            if (root.val >= max) {
                res++;
                max = root.val;
            }
        }
        return res + this.goodNodes(root.left, max) + this.goodNodes(root.right, max);
    }
}

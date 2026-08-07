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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if ((!p && q) || (p && !q)) return false;
        if (!p && !q) return true;
        // at this point, both are not null
        if (p.val != q.val) return false;
        if (p.val == q.val)
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}

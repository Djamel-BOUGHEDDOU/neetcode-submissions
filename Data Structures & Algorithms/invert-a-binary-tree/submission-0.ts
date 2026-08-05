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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode | null {
        if (root == null) return null;

        if (root.left == null && root.right == null) return root;

        const temp = root.left;
        root.left = root.right;
        root.right = temp;

        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}

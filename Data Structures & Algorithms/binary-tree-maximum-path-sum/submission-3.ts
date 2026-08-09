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
    maxPathSum(root: TreeNode | null): number {
        let maxSum = -Infinity;

        const dfs = (node: TreeNode | null): number => {
            if (node === null) return 0;

            // Maximum contribution we can take from each child.
            // Negative paths are better ignored.
            const left = Math.max(0, dfs(node.left));
            const right = Math.max(0, dfs(node.right));

            // A path can use BOTH children through this node.
            const pathThroughNode = left + node.val + right;

            // Update the global answer.
            maxSum = Math.max(maxSum, pathThroughNode);

            // The parent can only take ONE side.
            return node.val + Math.max(left, right);
        };

        dfs(root);

        return maxSum;
    }
}

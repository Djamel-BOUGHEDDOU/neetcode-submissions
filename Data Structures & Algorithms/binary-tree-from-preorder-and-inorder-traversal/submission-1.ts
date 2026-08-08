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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        if (!preorder.length || !inorder.length) return null;

        // value -> position in inorder
        const inorderMap = new Map<number, number>();

        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        let preIdx = 0;

        const build = (left: number, right: number): TreeNode | null => {
            if (left > right) return null;

            const rootVal = preorder[preIdx++];
            const root = new TreeNode(rootVal);

            const rootIndex = inorderMap.get(rootVal)!;

            // Build left and right
            root.left = build(left, rootIndex - 1);
            root.right = build(rootIndex + 1, right);

            return root;
        };

        return build(0, inorder.length - 1);
    }
}

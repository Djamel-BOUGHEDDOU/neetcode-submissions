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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
        if (!root) return null;
        let parentMap: Map<TreeNode, TreeNode | null> = new Map();

        parentMap.set(root, null);

        let nodes: Array<TreeNode> = [];

        nodes.push(root);

        while (nodes.length) {
            const currentNode = nodes.shift();
            if (currentNode.left) {
                nodes.push(currentNode.left);
                parentMap.set(currentNode.left, currentNode);
            }
            if (currentNode.right) {
                nodes.push(currentNode.right);
                parentMap.set(currentNode.right, currentNode);
            }
        }
        let pAncestor: Set<TreeNode> = new Set();

        pAncestor.add(p);

        while (p !== null) {
            if (parentMap.has(p)) {
                const parent = parentMap.get(p);
                pAncestor.add(parent);
                p = parent;
            }
        }
        while (q !== null) {
            if (pAncestor.has(q)) return q;
            if (parentMap.has(q)) {
                const parent = parentMap.get(q);
                q = parent;
            }
        }
        return null;
    }
}

class Solution {
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!subRoot) return true;
        if (!root) return false;

        const stack: TreeNode[] = [root];

        while (stack.length) {
            const node = stack.pop()!;

            // Candidate found
            if (node.val === subRoot.val) {
                if (this.sameTree(node, subRoot)) {
                    return true;
                }
            }

            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }

        return false;
    }

    private sameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        const stack: Array<[TreeNode | null, TreeNode | null]> = [[root, subRoot]];

        while (stack.length) {
            const [a, b] = stack.pop()!;

            if (!a && !b) continue;

            if (!a || !b) return false;

            if (a.val !== b.val) return false;

            stack.push([a.left, b.left]);
            stack.push([a.right, b.right]);
        }

        return true;
    }
}

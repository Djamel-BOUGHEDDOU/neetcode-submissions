class Codec {
    serialize(root: TreeNode | null): string {
        if (!root) return "#";

        const result: string[] = [];
        const stack: (TreeNode | null)[] = [root];

        while (stack.length > 0) {
            const node = stack.pop()!;

            if (node === null) {
                result.push("#");
                continue;
            }

            result.push(String(node.val));

            stack.push(node.right);
            stack.push(node.left);
        }

        return result.join(",");
    }

    deserialize(data: string): TreeNode | null {
        const values = data.split(",");

        if (values[0] === "#") return null;

        const root = new TreeNode(parseInt(values[0], 10));

        // [node, next child to process]
        // 0 = left, 1 = right
        const stack: [TreeNode, number][] = [[root, 0]];

        let index = 1;

        while (index < values.length && stack.length > 0) {
            const [node, side] = stack[stack.length - 1];
            const value = values[index++];

            if (value === "#") {
                if (side === 0) {
                    stack[stack.length - 1][1] = 1;
                } else {
                    stack.pop();
                }

                continue;
            }

            const child = new TreeNode(parseInt(value, 10));

            if (side === 0) {
                node.left = child;
                stack[stack.length - 1][1] = 1;
            } else {
                node.right = child;
                stack.pop();
            }

            stack.push([child, 0]);
        }

        return root;
    }
}

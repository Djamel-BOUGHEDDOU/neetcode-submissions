export class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let i = position.length - 1;
        let stack: [number, number][] = [];
        let sortedPosition: [number, number][] = position
            .map((p, i): [number, number] => [p, speed[i]])
            .sort((a, b) => a[0] - b[0]);

        for (; i >= 0; i--) {
            const left: [number, number] = sortedPosition[i];
            if (!stack.length) {
                stack.push(left);
            } else {
                const right = stack.pop()!;
                // we check if it will catch it:
                let willItCatchIt = false;
                const r = (target - right[0]) / right[1];
                const l = (target - left[0]) / left[1];

                willItCatchIt = l <= r;

                stack.push(right);

                if (willItCatchIt == false) {
                    stack.push(left);
                }
            }
        }

        return stack.length;
    }
}

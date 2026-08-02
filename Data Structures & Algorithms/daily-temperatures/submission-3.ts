class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const output = new Array<number>(temperatures.length).fill(0);
        const stack: number[] = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const idx = stack.pop()!;
                output[idx] = i - idx;
            }
            stack.push(i);
        }

        return output;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let start = 0;
        let res: number[] = [];
        for (; start < nums.length - k + 1; start++) {
            const window = nums.slice(start, start + k);
            res.push(Math.max(...window));
        }

        return res;
    }
}

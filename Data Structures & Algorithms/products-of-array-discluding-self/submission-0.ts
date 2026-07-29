class Solution {
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const prefix: number[] = new Array(n).fill(1);
        const suffix: number[] = new Array(n).fill(1);
        const res: number[] = new Array(n);

        for (let i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        for (let i = n - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }

        for (let i = 0; i < n; i++) {
            res[i] = prefix[i] * suffix[i];
        }

        return res;
    }
}

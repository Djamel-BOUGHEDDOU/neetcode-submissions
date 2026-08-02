class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let min = Infinity;
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let midIdx = Math.floor((left + right) / 2);
            if (nums[left] <= nums[midIdx]) {
                min = Math.min(min, nums[left]);
                left = midIdx + 1;
            } else {
                min = Math.min(min, nums[midIdx]);
                right = midIdx - 1;
            }
        }
        return min;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let slow = 0,
            fast = 0;

        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow == fast) break;
        }
        let secondSlow = 0;

        while (true) {
            slow = nums[slow];
            secondSlow = nums[secondSlow];
            if (slow == secondSlow) {
                return slow;
            }
        }
    }
}

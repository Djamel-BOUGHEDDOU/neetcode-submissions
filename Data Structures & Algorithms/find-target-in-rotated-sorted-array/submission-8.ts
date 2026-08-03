export class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;
        let deflection = right;
        // finding deflection
        while (left < right) {
            deflection = Math.floor((left + right) / 2);
            if (nums[left] < nums[deflection]) left = deflection;
            else right = deflection;
        }

        //perform binary search on both sides:

        if (deflection + 1 != nums.length) {
            // meaning the array was actually rotated
            // we start by the right side in this condition
            // and the left side performed by default

            let left = deflection + 1;
            let right = nums.length - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (target == nums[mid]) return mid;
                if (target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }

        left = 0;
        right = deflection;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (target == nums[mid]) return mid;
            if (target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return -1;
    }
}

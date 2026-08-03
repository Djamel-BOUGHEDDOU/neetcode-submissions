export class Solution {
    private findKth(nums1: number[], nums2: number[], k: number): number {
        // k is 1-indexed: find the k-th smallest across both arrays
        let left1 = 0;
        let left2 = 0;

        while (true) {
            if (left1 === nums1.length) return nums2[left2 + k - 1];
            if (left2 === nums2.length) return nums1[left1 + k - 1];
            if (k === 1) return Math.min(nums1[left1], nums2[left2]);

            const half = Math.floor(k / 2);
            const newLeft1 = Math.min(left1 + half, nums1.length) - 1;
            const newLeft2 = Math.min(left2 + half, nums2.length) - 1;

            if (nums1[newLeft1] <= nums2[newLeft2]) {
                k -= newLeft1 - left1 + 1;
                left1 = newLeft1 + 1;
            } else {
                k -= newLeft2 - left2 + 1;
                left2 = newLeft2 + 1;
            }
        }
    }

    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const total = nums1.length + nums2.length;
        if (total % 2 === 1) {
            return this.findKth(nums1, nums2, Math.floor(total / 2) + 1);
        }
        const left = this.findKth(nums1, nums2, total / 2);
        const right = this.findKth(nums1, nums2, total / 2 + 1);
        return (left + right) / 2;
    }
}

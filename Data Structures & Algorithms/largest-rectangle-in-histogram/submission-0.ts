class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let maxArea = 0;
        let i = 0;
        for (; i < heights.length; i++) {
            let left = i;
            let right = i;
            while (left > 0 && heights[left - 1] >= heights[i]) {
                left--;
            }
            while (right < heights.length - 1 && heights[right + 1] >= heights[i]) {
                right++;
            }

            maxArea = Math.max(maxArea, (right - left + 1) * heights[i]);
        }
        return maxArea;
    }
}

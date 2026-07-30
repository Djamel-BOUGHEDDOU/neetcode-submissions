class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = 0;
        let left = 0, right = heights.length - 1;
        while(left < right) {
            const width = right - left;
            const leftHeight = heights[left] ;
            const rightHeight = heights[right];
            const height = leftHeight < rightHeight ? leftHeight : rightHeight;
            const area = height * width
            max = max < area ? area : max;
            if(leftHeight < rightHeight) left ++;
            else right --;
        }
        return max;
    }
}

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let area = 0;

        while (height.length > 2) {
            const max1 = Math.max(...height);
            let index1 = height.indexOf(max1);
            height[index1] = -1;

            const max2 = Math.max(...height);
            let index2 = height.indexOf(max2);
            height[index2] = -1;

            const minHeight = Math.min(max1, max2);

            let start = index1 < index2 ? index1 : index2;
            let end = index1 >= index2 ? index1 : index2;

            const width = end - start - 1;

            area += width * minHeight;

            for (let i = start + 1; i < end; i++) {
                area -= height[i];
            }

            height[end] = minHeight;

            height.splice(start, end - start);
        }
        return area;
    }
}

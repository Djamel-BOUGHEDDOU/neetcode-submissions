class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let map = new Map<number, number>();
        let max = 0;
        for (let num of nums) {
            if (!map.has(num)) {
                let i = num - 1;
                let j = num + 1;
                let left = 0,
                    right = 0;

                while (map.has(i)) {
                    left = left < map.get(i) ? map.get(i) : left;
                    i--;
                }
                while (map.has(j)) {
                    right = right < map.get(j) ? map.get(j) : right;
                    j++;
                }
                map.set(num, left + right + 1);

                max = max < map.get(num) ? map.get(num) : max;
            }
        }
        return max;
    }
}

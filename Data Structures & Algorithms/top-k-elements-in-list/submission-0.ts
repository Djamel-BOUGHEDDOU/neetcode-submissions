class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map = new Map<number, number>();
        for(const num of nums) {
            if(!map.has(num))
            {
                map.set(num, 1);
            }
            map.set(num, map.get(num) + 1)
        }
        const sortedNums = [...map.entries()]
        .sort((a, b) => b[1] - a[1]);

        return sortedNums.slice(0, k).map(x => x[0]);

    }
}

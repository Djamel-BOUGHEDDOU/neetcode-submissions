class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);
        let bestRatio = 0;

        while (left <= right) {
            const mid = Math.floor((right + left) / 2);

            const hours = piles.reduce((sum, pile) => sum + Math.ceil(pile / mid), 0);

            if (hours > h) {
                left = mid + 1;
            } else {
                bestRatio = mid;
                right = mid - 1;
            }
        }

        return bestRatio;
    }
}

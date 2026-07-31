class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    characterReplacement(s: string, k: number): number {
        let frequencyCount = new Map<string, number>();
        let maxFreq = 0;
        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            frequencyCount.set(char, (frequencyCount.get(char) ?? 0) + 1);

            maxFreq = Math.max(maxFreq, frequencyCount.get(char)!);

            const windowSize = right - left + 1;

            if (windowSize - maxFreq > k) {
                const leftChar = s[left];
                frequencyCount.set(leftChar, frequencyCount.get(leftChar)! - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}

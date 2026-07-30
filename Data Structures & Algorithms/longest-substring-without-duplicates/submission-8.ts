class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0;
        let r = 0;
        let longest = 0;
        let seen = new Set();
        while (r < s.length) {
            if (!seen.has(s[r])) {
                seen.add(s[r]);
            } else {
                while (s[l] != s[r]) {
                    seen.delete(s[l]);
                    l++;
                }
                l++;
            }
            r++;

            longest = Math.max(longest, r - l);
        }

        return longest;
    }
}

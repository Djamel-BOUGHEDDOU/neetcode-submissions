class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let found = false;
        for (let i = 0; i < s2.length - s1.length + 1; i++) {
            const subStr = s2.slice(i, i + s1.length);
            const charCount = [...subStr].reduce(
                (obj, char) => {
                    obj[char] = (obj[char] ?? 0) + 1;
                    return obj;
                },
                {} as Record<string, number>,
            );
            for (let j = 0; j < s1.length; j++) {
                if (!(s1[j] in charCount) || charCount[s1[j]] == 0) {
                    break;
                }
                charCount[s1[j]] -= 1;

                if (j == s1.length - 1) found = true;
            }
        }
        return found;
    }
}

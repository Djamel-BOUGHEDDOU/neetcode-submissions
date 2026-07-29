class Solution {
    isPalindrome(s: string): boolean {
        const filtered = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let i = 0;
        const length = filtered.length;
        while (i < length / 2) {
            if (filtered[i] !== filtered[length - 1 - i]) return false;
            i++;
        }
        return true;
    }
}
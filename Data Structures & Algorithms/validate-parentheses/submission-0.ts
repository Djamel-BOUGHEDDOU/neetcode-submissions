class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = [];
        const pushSet = new Set(["(", "[", "{"]);
        const popMap = new Map([
            [")", "("],
            ["]", "["],
            ["}", "{"],
        ]);
        for (let char of s) {
            if (pushSet.has(char)) {
                stack.push(char);
            } else if (popMap.has(char)) {
                const top = stack.pop();
                if (top != popMap.get(char)) return false;
            }
        }
        return stack.length == 0;
    }
}

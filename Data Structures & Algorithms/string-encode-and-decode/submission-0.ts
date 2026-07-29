class Solution {
    
    encode(strs: string[]): string {
        let res = "";
        for (const str of strs) {
            res += str.length + "#" + str;
        }
        return res;
    }

    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++;
            const len = parseInt(str.slice(i, j));
            const word = str.slice(j + 1, j + 1 + len);
            result.push(word);
            i = j + 1 + len;
        }
        return result;
    }
}

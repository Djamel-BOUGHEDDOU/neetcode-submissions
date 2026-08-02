class Solution {
    dailyTemperatures(temperatures: number[]): number[] {
        let pendingIdx: number[] = [];
        let output = new Array<number>(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            for (let idx of pendingIdx) {
                if (temperatures[idx] < temperatures[i]) {
                    output[idx] = i - idx;
                }
            }
            pendingIdx = pendingIdx.filter((idx) => temperatures[idx] >= temperatures[i]);
            pendingIdx.push(i);
        }

        return output;
    }
}

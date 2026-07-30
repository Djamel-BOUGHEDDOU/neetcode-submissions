class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
  maxProfit(prices: number[]): number {
    let profit = 0;
    for (let i = 0; i < prices.length - 1; ) {
      let w = i + 1;
      while (prices[i] < prices[w]) {
        profit = Math.max(prices[w] - prices[i], profit);
        w++;
      }
      i = w;
    }
    return profit;
  }
}

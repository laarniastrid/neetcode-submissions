class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const len: number = prices.length || 0;

        if (len < 1 || len > 100) {
            return 0;
        }

        let max = 0;

        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len ; j++) {
                max = Math.max(max, prices[j] - prices[i]);
            }
        }

        return max;
    }
}

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
            let curr = prices[i];

            for (let j = i + 1; j < len; j++) {
                let sell = prices[j];
                let diff = sell - curr;
                console.log('diff', diff);

                if (diff > 0) {
                    max = Math.max(max, diff);
                }
            }
        }

        return max;
    }
}

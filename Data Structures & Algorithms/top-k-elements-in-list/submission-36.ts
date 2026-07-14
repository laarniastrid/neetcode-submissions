class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency: Record<number, number> = {};
        const numBucket = Array.from({ length: nums.length + 1 }, () => []);

        nums.forEach(num => {
            frequency[num] ??= 0;
            frequency[num]++;
        });

        for (const key in frequency) {
            numBucket[frequency[key]].push(Number(key));
        }

        const response: number[] = [];

        for (let i = numBucket.length - 1; i >= 0; i--) {
            for (const num of numBucket[i]) {
                response.push(num);

                if (response.length === k) {
                    return response;
                }
            }
        }

        return response;
    }
}

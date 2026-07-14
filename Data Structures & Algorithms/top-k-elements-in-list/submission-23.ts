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

        const response = numBucket.filter(x => x.length > 0).reverse().flat().slice(0, k);

        return response;
    }
}

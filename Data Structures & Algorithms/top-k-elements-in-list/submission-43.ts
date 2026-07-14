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

        const flatNums = numBucket.flat();
        const response = [];

        for (let i = flatNums.length - 1; i >= 0; i--) {
            const len = response.length;

            // if (len === k) {
            //     break;
            // }

            response.push(flatNums[i])
        }

        return response.slice(0, k);
    }
}

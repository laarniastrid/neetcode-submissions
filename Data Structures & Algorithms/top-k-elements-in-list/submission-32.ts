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

        // const response = numBucket.filter(x => x.length > 0).reverse().flat().slice(0, k);
        // const flatNums = numBucket.filter(x => x.length > 0).flat();
        const flatNums = numBucket.flat();
        const response = [];

        for (let i = flatNums.length - 1; i >= 0; i--) {
            const len = response.length;

            if (len !== k) {
                response.push(flatNums[i])
            }
        }

        console.log('response ', response);

        return response;
    }
}

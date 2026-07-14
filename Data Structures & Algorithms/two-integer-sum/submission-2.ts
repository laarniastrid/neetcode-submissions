class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = {};

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (seen[complement] !== undefined) {
                const firstIndex = seen[complement];

                return [firstIndex, i];
            }

            seen[nums[i]] = i;
        }

        return [];
    }
}

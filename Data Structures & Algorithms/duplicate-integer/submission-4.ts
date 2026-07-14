class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const removeDups = new Set(nums);
        const newNums = [...removeDups];

        return nums.length !== newNums.length;
    }
}

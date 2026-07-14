class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = {};

        strs.forEach(str => {
            const sortedStr = str.split('').sort().join('');

            groups[sortedStr] ??= [];
            groups[sortedStr].push(str);
        });

        return Object.values(groups);
    }
}

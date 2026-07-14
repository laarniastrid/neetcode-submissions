class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sortedS = s.split('').sort();
        const sortedT = t.split('').sort();

        if (sortedS.length !== sortedT.length) {
            return false;
        }

        return sortedS.join('') === sortedT.join('');
    }
}

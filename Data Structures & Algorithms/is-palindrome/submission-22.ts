class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const noSpace: string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        const noSpaceR: string = noSpace.split('').reverse().join('');

        return noSpace === noSpaceR;
    }
}

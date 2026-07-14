class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // const noSpace: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const noSpace: string = s.replace(/[\W_]+/g, '').toLowerCase();
        const noSpaceR: string = noSpace.split('').reverse().join('');

        return noSpace === noSpaceR;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const noSpaces: string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        const noSpacesR: string = noSpaces.split('').reverse().join('');

        return noSpaces === noSpacesR;
    }
}

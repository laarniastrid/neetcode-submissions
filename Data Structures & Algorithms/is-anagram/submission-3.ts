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

        const response = [true];

        sortedS.forEach((char, i) => {
            if (char !== sortedT[i]) {
                response[0] = false;
            }
        });

        return response[0];
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let strF = "";

        for (let str of strs) {
            strF += str.length + "#" + str;
        }

        return strF;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let position = 0;

        while (position < str.length) {

            // Find where the length ends
            let separator = str.indexOf("#", position);

            // Get the length of the current word
            let length = Number(str.slice(position, separator));

            // Word starts after "#"
            let start = separator + 1;

            // Extract exactly `length` characters
            let word = str.slice(start, start + length);

            result.push(word);

            // Move to the next encoded word
            position = start + length;
        }

        return result;
    }
}
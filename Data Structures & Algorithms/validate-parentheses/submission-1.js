class Solution {
    /**
     * @param {sing} s
     * @return {boolean}
     */
    
 isValid(str) {
    const brackets = new Map([
        ["(", ")"],
        ["[", "]"],
        ["{", "}"],
    ]);

    if (str.length % 2 !== 0) return false;

    let rightBrackets = [];

    for (let i = 0; i < str.length; i++) {

        // Opening bracket
        if (brackets.has(str[i])) {
            rightBrackets.push(brackets.get(str[i]));
        }

        // Closing bracket
        else {
            // Nothing available to match
            if (rightBrackets.length === 0) {
                return false;
            }

            // Doesn't match the most recently opened bracket
            if (str[i] !== rightBrackets[rightBrackets.length - 1]) {
                return false;
            }

            // Match → remove it
            rightBrackets.pop();
        }
    }

    // Everything must have been matched
    return rightBrackets.length === 0;
}
}

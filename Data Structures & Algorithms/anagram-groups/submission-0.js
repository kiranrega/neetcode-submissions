class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen = new Map()
        let res = []
        for (let i = 0; i<strs.length; i++) {
            let sortedArr = strs[i].split('').sort().join('')

            if (seen.has(sortedArr)) {
                seen.set(sortedArr, [...seen.get(sortedArr), strs[i]])
            } else {
                seen.set(sortedArr, [strs[i]])
            }
        }
    seen.forEach((i) => res.push(i))
    return res
    }
}

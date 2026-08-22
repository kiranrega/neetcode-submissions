function areMapsEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    
    for (const [key, value] of map1) {
        // Check if key exists in map2 and values are strictly equal
        if (!map2.has(key) || map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s1 = new Map();
        let s2 = new Map();

        for (let i of s) {
            if (!s1.has(i)) {
                s1.set(i, 1)
            } else {
                s1.set(i, s1.get(i)+1)
            }
        }

        for (let i of t) {
            if (!s2.has(i)) {
                s2.set(i, 1)
            } else {
                s2.set(i, s2.get(i)+1)
            }
        }
        
    return areMapsEqual(s1, s2)
    }
}

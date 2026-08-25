class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let occ = new Map()

        for (let i of nums) {
            if (occ.has(i)) {
                occ.set(i, occ.get(i)+1)
            } else {
                occ.set(i, 1)
            }
        }
        let sort = [...occ].sort((a,b) => b[1] - a[1])
        let finalArr= []
        
        for (let i=0; i< k; i++ ) {
            finalArr.push(sort[i][0])
        }
        return finalArr
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
     twoSum(nums, target) {
        let seen = new Map();

        for (let i = 0; i<nums.length; i++) {
            let curr = nums[i]
            let rema = target-curr
        //   console.log(i)
            if (seen.has(rema)) {
            //   console.log(seen.get(rema))
                return [i, seen.get(rema)]
            }

            seen.set(curr, i)
        }
    }
}

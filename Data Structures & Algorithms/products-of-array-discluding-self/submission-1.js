class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    let res = new Array(nums.length).fill(1)

    // 1. Store product of everything to the LEFT
    let leftProduct = 1

    for (let i = 0; i < nums.length; i++) {
        res[i] = leftProduct
        leftProduct *= nums[i]
    }

    // 2. Multiply by product of everything to the RIGHT
    let rightProduct = 1

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= rightProduct
        rightProduct *= nums[i]
    }

    return res
}
}

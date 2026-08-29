class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
    let result = []

    for (let i of operations) {

        if (i === "C") {
            result.pop()

        } else if (i === "D") {
            result.push(Number(result[result.length - 1]) * 2)

        } else if (i === "+") {
            let last = result.length - 1

            result.push(
                Number(result[last]) + Number(result[last - 1])
            )

        } else {
            result.push(Number(i))
        }
    }

    return result.reduce((sum, score) => sum + score, 0)
}
}

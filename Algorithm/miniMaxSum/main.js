// Algorithm - miniMaxSum

const minMaxSum = (arr) => {
    // sort array
    arr.sort((a, b) => a - b)

    // mencari min
    const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0)

    // mencari max
    const maxSum = arr.slice(1, 5).reduce((sum, num) => sum + num, 0)

    console.log(`${minSum} ${maxSum}`)

}

const arr = [3, 2, 5, 4, 1]
minMaxSum(arr)
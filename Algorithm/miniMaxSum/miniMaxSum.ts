// Algorithm - miniMaxSum

const sumMinMax = (ar: number[]): void => {
    ar.sort((a, b) => a - b)

    const minSum = ar.slice(0, 4).reduce((sum, num) => sum + num, 0)
    const maxSum = ar.slice(1, 5).reduce((sum, num) => sum + num, 0)

    console.log(`${minSum} ${maxSum}`)
}

const ar: number[] = [4, 3, 5, 1, 2]
sumMinMax(ar)
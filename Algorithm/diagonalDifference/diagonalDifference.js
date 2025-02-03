// Algorithm - Diagonal Difference

const diagonalDifference = (arr) => {
    // Panjang Array / n  = 3
    let n = arr.length
    // Inisiasi
    let primaryDiagonalSum = 0
    let secondaryDiagonalSum = 0

    // Loop
    for (let i = 0; i < n; i++) {
        // arr[0][0] = 11, arr[1][1] = 5, arr[2][2] = -12
        primaryDiagonalSum += arr[i][i]
        // arr[0][2] = 4, arr[1][1] = 5, arr[2][0] = 10
        secondaryDiagonalSum += arr[i][n - 1 - i]
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum)
}

const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalDifference(matrix));
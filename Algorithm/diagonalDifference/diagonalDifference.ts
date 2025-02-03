// Algorithm - Diagonal Difference

const diagonaledDifference = (arr: number[][]): number => {
    let n: number = arr.length;
    let primaryDiagonal: number = 0;
    let secondaryDiagonal: number = 0;

    for (let i = 0; i < n; i++) {
        primaryDiagonal += arr[i][i]
        secondaryDiagonal += arr[i][n - 1 - i]
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal)
}

const matrixs = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonaledDifference(matrixs))
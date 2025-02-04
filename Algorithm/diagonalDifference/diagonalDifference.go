// Algorithm - Diagonal Difference

package main

import (
	"fmt"
	"math"
)

func diagonalDifference(arr [][]int)int {
	n := len(arr)
	primaryDiagonal := 0
	secondaryDiagonal := 0

	for i:= 0; i < n; i++ {
		primaryDiagonal += arr[i][i]
		secondaryDiagonal += arr[i][n - 1 - i]
	}

	return int(math.Abs(float64(primaryDiagonal - secondaryDiagonal)))
}


func main() {
	matriks := [][]int{
		{11, 2, 4},
		{4, 5, 6},
		{10, 8, -12},
	}

	fmt.Println(diagonalDifference(matriks))
}
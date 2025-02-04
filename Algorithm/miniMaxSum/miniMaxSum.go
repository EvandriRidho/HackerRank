// Algorithm - Mini Max Sum

package main

import (
	"fmt"
	"sort"
)

func miniMaxSum(arr []int) {
	sort.Ints(arr)

	maxSum := 0
	for i := 1; i < 5; i++ {
		maxSum += arr[i]
	}

	minSum := 0
	for i := 0; i < 4; i++ {
		minSum += arr[i]
	}

	fmt.Printf("%d %d\n", minSum, maxSum)
}

func main() {
	arr := []int{3, 2, 5, 4, 1}
	miniMaxSum(arr)
}
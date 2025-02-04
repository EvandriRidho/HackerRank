// Algorithm - Plus Minus

package main

import "fmt"

func plusMinus(arr []int) {
	n := len(arr)
	pos := 0
	neg := 0
	zero := 0

	for i := 0; i < n; i++ {
		if arr[i] > 0 {
			pos++;
		} else if arr[i] < 0 {
			neg++;
		} else {
			zero++;
		}
	}

	fmt.Printf("%.6f\n", float64(pos)/float64(n))
	fmt.Printf("%.6f\n", float64(neg)/float64(n))
	fmt.Printf("%.6f\n", float64(zero)/float64(n))
}

func main() {
	arr := []int{-4, 3, -9, 0, 4, 1}
	plusMinus(arr)
}
// Algorithm - Array sum

package main

import "fmt"

func arraySum(arr []int) int {
	sum := 0
	for i:=0; i < len(arr); i++ {
		sum += arr[i]
	}

	return sum
}

func main() {
	arr:= []int{1,2,3,4,5}
	fmt.Println(arraySum(arr))
}
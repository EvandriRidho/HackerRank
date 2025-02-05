// Algorithm - A very Big Sum

package main

import "fmt"

func aVeryBigSum(arr []int64) int64 {
	sum := int64(0)
	for i:=0; i < len(arr); i++ {
		sum += arr[i]
	}

	return sum
}

func main() {
	arr:= []int64{1000000001,1000000002,1000000003,1000000004,1000000005}
	fmt.Println(aVeryBigSum(arr))
}
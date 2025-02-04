// Data Structures - Reverse Array

package main

import "fmt"

func reverseArr(ar []int) []int {
	reverseAr := []int{}
	for i:= len(ar) -1 ; i >= 0; i-- {
		reverseAr = append(reverseAr, ar[i])
	}
	return reverseAr
}

func main() {
	ar := []int{1,2,3,4,5}
	fmt.Println(reverseArr(ar))
}
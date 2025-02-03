// Algorithm - Staircase

package main

import (
	"fmt"
	"strings"
)

func staircase(n int) {
	for i:=1; i < n; i++ {
		fmt.Println(strings.Repeat(" ", n-i) + strings.Repeat("#", i))
	}
}

func main() {
	staircase(6)
}
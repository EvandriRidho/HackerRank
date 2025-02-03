// Algorithm - solveMeFirst

package main

import "fmt"

func solveMeFirst(a int, b int) int {
    return a + b
}

func main() {
    var a, b int
    fmt.Scanln(&a)
    fmt.Scanln(&b)
    fmt.Println(solveMeFirst(a, b))
}

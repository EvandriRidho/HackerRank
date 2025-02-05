// Algorithm - solveMeFirst

package main

import "fmt"

func solveMeFirst(a int, b int) int {
    return a + b
}

func main() {
    var a, b int
    fmt.Print("Masukkan angka a: ")
    fmt.Scan(&a) 

    fmt.Print("Masukkan angka b: ")
    fmt.Scan(&b) 
    fmt.Println(solveMeFirst(a, b))
}

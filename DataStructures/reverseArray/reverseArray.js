// Data Structures - Array

// using functional Programming
const reverseArray = (arr) => {
    // untuk menyalin dan membalikkan array
    return arr.slice().reverse()
}

const arr = [1, 2, 3]
console.log(reverseArray(arr))

// using Loop
const arReverse = (ar) => {
    // penyimpanan array 
    let reversear = []
    // looping dari yang terbesar
    for (let i = ar.length - 1; i >= 0; i--) {
        // memasukkan hasil loop ke array kosong
        reversear.push(ar[i])
    }
    return reversear
}

const ar = [1, 2, 3, 4, 5]
console.log(arReverse(ar))
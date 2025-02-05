// Algorithm - Array Sum

// Using Functional Programming
const arrSum = (arr: number[]): number => {
    return arr.reduce((sum, num) => sum + num, 0)
}

const num: number[] = [1, 2, 3, 4, 5]
console.log(arrSum(num))

// Using Looping
const ArraySum = (ar: number[]): number => {
    let sum = 0
    for (let j = 0; j < ar.length; j++) {
        sum += ar[j]
    }

    return sum
}

console.log(ArraySum(num))
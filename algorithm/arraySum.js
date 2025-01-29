// Algorithm - Array Sum

// Using Functional Programming
const arraySum = (ar) => {
    return ar.reduce((sum, num) => sum + num, 0)
}

const ar = [1, 2, 3, 4, 5]
console.log(arraySum(ar))

// Using Looping
const simpleArraySum = (arr) => {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

const arr = [1, 2, 3, 4, 5]
console.log(simpleArraySum(arr))
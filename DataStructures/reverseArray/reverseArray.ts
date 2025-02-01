// Data Structures - Array

const reversedArray = (ar: number[]): number[] => {
    return ar.slice().reverse()
}

const numArr: number[] = [1, 2, 3, 4, 5]
console.log(reversedArray(numArr))
// Algorithm - A Very Big Sum

const bigSum = (ar: number[]): number => {
    return ar.reduce((sum, num) => sum + num, 0)
}

let arry: number[] = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(bigSum(arry))
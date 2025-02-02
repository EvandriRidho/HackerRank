// Algorithm - A Very Big Sum

const aVeryBigSum = (ar) => {
    // Menghitung array
    return ar.reduce((sum, num) => sum + num, 0)
}

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(ar));
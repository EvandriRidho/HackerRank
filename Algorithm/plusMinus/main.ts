// Algorithm - Plus Minus

const minusPlus = (ar: number[]): void => {
    let n: number = ar.length
    let pos: number = 0
    let neg: number = 0
    let zero: number = 0

    for (let k = 0; k < n; k++) {
        if (ar[k] > 0) {
            pos++
        } else if (ar[k] < 0) {
            neg++
        } else {
            zero++
        }
    }

    console.log((n / pos).toFixed(6))
    console.log((n / neg).toFixed(6))
    console.log((n / zero).toFixed(6))
}

const number: number[] = [-4, 3, -9, 0, 4, 1]
minusPlus(number)

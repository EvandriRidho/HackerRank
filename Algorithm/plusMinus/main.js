// Algorithm - Plus Minus

const plusMinus = (arr) => {
    // Inisiasi
    let n = arr.length;
    let pos = 0
    let neg = 0
    let zero = 0

    // looping array
    for (let i = 0; i < n; i++) {
        // jika array dengan index ke-i > 0
        if (arr[i] > 0) {
            pos++;
            // jika array dengan index ke-i > 0
        } else if (arr[i] < 0) {
            neg++;
        } else {
            zero++;
        }
    }

    // toFixed untuk membatasi 6 angka dibelakang koma
    console.log((pos / n).toFixed(6))
    console.log((neg / n).toFixed(6))
    console.log((zero / n).toFixed(6))
}

const arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)
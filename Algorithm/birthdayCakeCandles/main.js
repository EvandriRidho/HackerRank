// Algorithm - Birthday Cake Candles

const birthdayCakeCandles = (candles) => {
    // Untuk mencari nilai paling tinggi di array
    let maxHeight = Math.max(...candles)

    // Sebagai filter nilai
    let count = candles.filter(num => num === maxHeight).length

    return count
}

let candles = [3, 2, 1, 3]
console.log(birthdayCakeCandles(candles))
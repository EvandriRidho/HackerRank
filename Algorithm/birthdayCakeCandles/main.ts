// Algorithm - Birthday Cake Candles

const candlesCake = (candles: number[]): number => {
    let maxHeight = Math.max(...candles)
    let count = candles.filter(num => num === maxHeight).length
    return count
}

let arrCandles: number[] = [3, 2, 1, 3]
console.log(candlesCake(arrCandles))
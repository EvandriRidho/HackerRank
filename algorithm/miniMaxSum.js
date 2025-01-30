function miniMaxSum(arr) {
    // Sort Array jika tidak urut
    arr.sort((a, b) => a - b);

    // Memotong array dan sum array untuk mendapat min
    const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);

    // Memotong array dan sum array untuk mendapat max
    const maxSum = arr.slice(1, 5).reduce((sum, num) => sum + num, 0);

    console.log(`${minSum} ${maxSum}`);
}

const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr); 
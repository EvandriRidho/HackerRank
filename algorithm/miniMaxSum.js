function miniMaxSum(arr) {
    // Sort Array
    arr.sort((a, b) => a - b);

    // Min Sum
    const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);

    // Max Sum
    const maxSum = arr.slice(1, 5).reduce((sum, num) => sum + num, 0);

    console.log(`${minSum} ${maxSum}`);
}

const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr); 
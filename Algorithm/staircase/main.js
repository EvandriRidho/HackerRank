// Algorithm - staircase

const staircase = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i) + ' '.repeat(n - i))
    }
}

staircase(6)
// Algorithm - staircase

const staircases = (n: number): void => {
    for (let i = 1; i < n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i))
    }
}

staircases(6)
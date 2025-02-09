// Algorithm - Compare the Triplet

const compareScore = (a: number[], b: number[]): number[] => {
    let aliceScore: number = 0
    let bobScore: number = 0

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore++
        } else if (a[i] < b[i]) {
            bobScore++
        }
    }

    return [aliceScore, bobScore]
}

const aScore: number[] = [5, 6, 7]
const bScore: number[] = [3, 6, 10]

console.log(compareScore(aScore, bScore))
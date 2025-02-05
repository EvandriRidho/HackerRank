// Algorithm - Compare the Triplet

const compareTriplet = (a, b) => {
    let alice = 0
    let bob = 0

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alice++
        } else if (a[i] < b[i]) {
            bob++
        }
    }

    return [alice, bob]
}

const a = [5, 6, 7];
const b = [3, 6, 10];

console.log(compareTriplet(a, b))
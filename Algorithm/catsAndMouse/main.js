// Algorithm - Cats and a Mouse

const catsAndMouse = (x, y, z) => {
    let distA = Math.abs(z - x)
    let distB = Math.abs(z - y)


    if (distA > distB) {
        return ("Cat B")
    } else if (distA < distB) {
        return ("Cat A")
    } else {
        return ("Mouse C")
    }
}

console.log(catsAndMouse(1, 2, 3))
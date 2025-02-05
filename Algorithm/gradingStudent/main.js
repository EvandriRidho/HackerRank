// Algorithm - Grading Student

const gradingStudent = (grades) => {
    return grades.map(grade => {
        if (grade < 38) return grade;
        let ceilingFive = Math.ceil(grade / 5) * 5;
        return (ceilingFive - grade < 3) ? ceilingFive : grade
    })
}

const grades = [73, 67, 38, 33]
const result = gradingStudent(grades)
console.log(result.join("\n"))
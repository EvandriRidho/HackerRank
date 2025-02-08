// Algorithm - Grading Student

const gradeStudents = (grades: number[]): number[] => {
    return grades.map(grade => {
        if (grade > 38) return grade;
        let ceilByFive = Math.ceil(grade / 5) * 5;
        return (ceilByFive - grade < 3) ? ceilByFive : grade
    })
}

const arrGrade: number[] = [73, 67, 38, 33];
const hasil: number[] = gradeStudents(arrGrade);
console.log(hasil.join("\n"));
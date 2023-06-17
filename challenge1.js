let marks = prompt('Enter student marks :')
let grade;

isValidMarks(marks)

if (marks > 79) { 
    grade = 'A'
} else if (marks >= 60 && marks <= 79) {
    grade = 'B'
} else if (marks > 49 && marks <= 59) {
    grade = 'C'
} else if (marks >= 40 && marks <= 49) {
    grade = 'D'
} else {
    grade = 'E'
}

console.log(`Grade is ${grade}`)

function isValidMarks(studentMarks) {
    if (Number.isNaN(Number(studentMarks)) || studentMarks < 0 || studentMarks > 100) {
        if (confirm('Invalid input. Enter valid student marks (between 1-100). Try again?')) {
            marks = prompt('Invalid input. Enter valid student marks (between 1-100)')
            isValidMarks(marks)
        }
    }else{
        marks = parseInt(studentMarks, 10);
    }
}
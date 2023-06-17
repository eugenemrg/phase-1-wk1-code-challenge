/** @global Stores marks input from prompt */
let marks = prompt('Enter student marks :')

/** @global Stores grade assigned to the marks*/
let grade

validateMarks(marks)

if (marks > 79) { 
    // A > 79
    grade = 'A'
} else if (marks >= 60 && marks <= 79) {
    // B - 60 to 79
    grade = 'B'
} else if (marks > 49 && marks <= 59) {
    // C - 59 to 49
    grade = 'C'
} else if (marks >= 40 && marks <= 49) {
    // D - 40 to 49
    grade = 'D'
} else {
    // E - less 40
    grade = 'E'
}

// Outputs grade
alert(`Grade is ${grade}`)

/**
 * Checks if mark is valid. 
 * Invalid marks prompts user to give valid marks, prompts
 * recursively till valid or cancelled by user.
 * 
 * @param {string} studentMarks Student mark from prompt input
 */
function validateMarks(studentMarks) {
    if (Number.isNaN(Number(studentMarks)) || studentMarks < 0 || studentMarks > 100) {
        if (confirm('Invalid input. Enter valid student marks (between 0-100). Try again?')) {
            marks = prompt('Enter valid student marks (between 0-100) :')
            isValidMarks(marks)
        }
    }else{
        marks = parseInt(studentMarks, 10)
    }
}
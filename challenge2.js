/** @global Speed limit */
const speedLimit = 70
/** @global Value above speed limit that gives one demerit point */
const demeritBounds = 5
/** @global Current car speed to be checked */
let speed = prompt('Enter car speed : ')
/** @global Message to be printed out after check */
let message;

validateSpeed(speed)

if (speed < speedLimit) {
    message = 'Ok'
} else {
    /** Value of car speed above speed limit */
    let excessSpeed = speed - speedLimit
    /** Total demerit points for speeding */
    let demeritPoints = Math.trunc(excessSpeed / demeritBounds)
    message = (demeritPoints>12) ? 'License suspended' : `Points: ${demeritPoints}`
}

/** message output */
console.log(message)

/**
 * Validates speed input.
 * Invalid speed input prompts user to give valid speed,
 * prompts recursively till valid or cancelled by user.
 * 
 * @param {string} carSpeed Car speed from input prompt
 * 
 */
function validateSpeed(carSpeed) {
    if (carSpeed.length === 0 || Number.isNaN(Number(carSpeed)) || carSpeed < 0) {
        if (confirm('Invalid car speed. Try again ?')) {
            speed = prompt('Enter valid car speed : ')
            validateSpeed(speed)
        }
    } else {
        speed = parseFloat(carSpeed)
    }
}
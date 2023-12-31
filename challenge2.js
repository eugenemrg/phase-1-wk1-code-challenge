/** @global Speed limit */
const speedLimit = 70

/** @global Value above speed limit that earns the driver a demerit point */
const demeritBounds = 5

/** @global Current car speed to be checked */
let speed = prompt('Enter car speed : ')

/** @global Message to be printed out after speed check */
let message;

validateSpeed(speed)

if (speed < speedLimit) {
    message = 'Ok'
} else {
    let excessSpeed = speed - speedLimit
    let demeritPoints = Math.trunc(excessSpeed / demeritBounds)
    message = (demeritPoints>12) ? 'License suspended' : `Points: ${demeritPoints}`
}

// Output message to driver
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
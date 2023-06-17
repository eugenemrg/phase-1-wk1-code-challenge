const speedLimit = 70;
const demeritBounds = 5;
let speed = prompt('Enter car speed : ')
let message;

validateSpeed(speed)



function validateSpeed(carSpeed) {
    if (Number.isNaN(Number(carSpeed)) || carSpeed < 0) {
        if (confirm('Invalid car speed. Try again ?')) {
            speed = prompt('Enter valid car speed : ')
            validateSpeed(speed)
        }
    } else {
        speed = parseFloat(carSpeed)
    }
}
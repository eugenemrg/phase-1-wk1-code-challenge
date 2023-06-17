let speed = prompt('Enter car speed : ')

validateSpeed(speed)

function validateSpeed(carSpeed) {
    if(Number.isNaN(Number(carSpeed)) || carSpeed < 0){
        if(confirm('Invalid car speed. Try again ?')){
            speed = prompt('Enter valid car speed : ')
            validateSpeed(speed)
        }
    }else{
        speed = parseInt(carSpeed)
    }
}
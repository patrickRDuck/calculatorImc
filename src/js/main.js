//VARIABLES
import {modal} from './modal.js';

import {alertError} from './alert-error.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
let imc 

//FUNCTIONS
function handleSubmit (event) {
    event.preventDefault() 

    let weight = Number(inputWeight.value)
    let height = Number(inputHeight.value)

    const showAlertError = notNumber(weight) || notNumber(height)

    if (showAlertError) {
        alertError.open()
        return;
    }
    alertError.close()

    if (height >= 100) {
        height = height / 100
    }

    imc = (weight / (height ** 2)).toFixed(2);


    modal.open()
    modal.message.innerText = `Seu IMC é de ${imc}`
}

function closeAlertError () {
    alertError.close()
}

function handleKeydown (event) {
    console.log(event.key)
    if (event.key == 'Escape') {
        modal.close()
    }
}

function notNumber (value) {
    return isNaN(value) || value == ""
}

//EVENTS
form.onsubmit = handleSubmit;

modal.closeButton.addEventListener('click', modal.close)
window.addEventListener('keydown', handleKeydown)

inputWeight.addEventListener('input', closeAlertError)
inputHeight.addEventListener('input', closeAlertError)




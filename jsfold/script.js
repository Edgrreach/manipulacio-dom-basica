const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.querySelector('#result');

form.addEventListener('submit', btnOnclick)

function btnOnclick(event) {
    event.preventDefault();
 let suma = parseInt(input1.value) + parseInt(input2.value)
 p.innerText = "El resultado es: " + suma
}
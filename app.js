'use strict'

function Somar(){
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const resultado = document.getElementById('resultado')

    const resultadoSoma = 'O resultado da soma é: ' + (parseFloat(num1) + parseFloat(num2))
    resultado.textContent = resultadoSoma
}
function Subtrair(){
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const resultado = document.getElementById('resultado')

    const resultadoSubtracao = 'O resultado da soma é: ' + (parseFloat(num1) - parseFloat(num2))
    resultado.textContent = resultadoSubtracao
}
function Multiplicar(){
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const resultado = document.getElementById('resultado')

    const resultadoMultiplicacao = 'O resultado da soma é: ' + (parseFloat(num1) * parseFloat(num2))
    resultado.textContent = resultadoMultiplicacao
}
function Dividir(){
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const resultado = document.getElementById('resultado')

    const resultadoDivisao = 'O resultado da soma é: ' + (parseFloat(num1) / parseFloat(num2))
    resultado.textContent = resultadoDivisao
}


document.getElementById('soma').addEventListener('click',Somar) 
document.getElementById('subtracao').addEventListener('click',Subtrair)
document.getElementById('multiplicacao').addEventListener('click',Multiplicar)
document.getElementById('divisao').addEventListener('click',Dividir)
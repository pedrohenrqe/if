'use strict'

const botaoSomar = document.getElementById('somar')
const botaoSubtrair = document.getElementById('subtrair')
const botaoMultiplicar = document.getElementById('multiplicar')
const botaoDividir = document.getElementById('dividir')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('media')
const botaoSomar3 = document.getElementById('somar3')
const botaoVerificar = document.getElementById('verificar')
const botaoOrdenar = document.getElementById('ordenar')

function somar () {

    const numeroUm = Number(document.getElementById('n1').value)
    const numeroDois = Number(document.getElementById('n2').value)
    const resultado1 = document.getElementById('resultado1')
    
    const soma = numeroUm + numeroDois

    resultado1.textContent = soma

}

function subtrair () {

    const numeroTres = Number(document.getElementById('n3').value)
    const numeroQuatro = Number(document.getElementById('n4').value)
    const resultado2 = document.getElementById('resultado2')
    
    const diferenca = numeroTres - numeroQuatro

    resultado2.textContent = diferenca

}

function multiplicar () {

    const numeroCinco = Number(document.getElementById('n5').value)
    const numeroSeis = Number(document.getElementById('n6').value)
    const resultado3 = document.getElementById('resultado3')
    
    const produto = numeroCinco * numeroSeis

    resultado3.textContent = produto

}

function dividir () {

    const numeroSete = Number(document.getElementById('n7').value)
    const numeroOito = Number(document.getElementById('n8').value)
    const resultado4 = document.getElementById('resultado4')
    
    const quociente = numeroSete / numeroOito

    resultado4.textContent = quociente

}

function identificar () {

    const numeroItem2 = Number(document.getElementById('numero-item-2').value)
    const positivoOuNegativo = document.getElementById('positivo-negativo')

    if (numeroItem2 > 0 ){

        positivoOuNegativo.textContent = 'Positivo'

    }else if(numeroItem2 < 0){

        positivoOuNegativo.textContent = 'Negativo'

    }else {

        positivoOuNegativo.textContent = 'Zero'

    }   

}

function calcularMedia () {

    const nota1 = Number(document.getElementById('nota-1').value)
    const nota2 = Number(document.getElementById('nota-2').value)
    const nota3 = Number(document.getElementById('nota-3').value)
    const nota4 = Number(document.getElementById('nota-4').value)

    const md1 = (nota1 + nota2 + nota3 + nota4) / 4

    if (md1 >= 7){

        alert(`Sua média é ${md1}. Parabéns, você foi aprovado!`)

    } else {

        const ne = prompt(`Sua média é ${md1}. Insira sua nota de exame`)

        const md2 = (md1 + Number(ne)) / 2
        
        if (md2 >= 5){

            alert(`Sua nova média é ${md2}. Aprovado em exame`)

        }else{

            alert(`Sua nova média é ${md2}. Você foi reprovado`)

        }

    }

}

function somarTresValores () {

    const valor1 = Number(document.getElementById('valor1').value)
    const valor2 = Number(document.getElementById('valor2').value)
    const valor3 = Number(document.getElementById('valor3').value)
    const resultado3 = document.getElementById('somar-3-valores')

    const soma3 = valor1 + valor2 + valor3

    if(soma3 >= 100){
        
        resultado3.textContent = soma3
        
    }else {

        resultado3.textContent = 'Seu total não é maior que 100'

    }

}

function verificarMultiplos() {

    const numeroNove = Number(document.getElementById('n9').value)
    const numeroDez = Number(document.getElementById('n10').value)
    const numeroOnze = Number(document.getElementById('n11').value)
    const numeroDoze = Number(document.getElementById('n12').value)
    const resultadoMultiplos = document.getElementById('multiplos')

    let aux = ''

    if (numeroNove % 2 == 0 || numeroNove % 3 == 0){
        
        aux = numeroNove

    }

    if (numeroDez % 2 == 0 || numeroDez % 3 == 0){

        if(numeroNove % 2 == 0 || numeroNove % 3 == 0){

            aux = `${aux} - ${numeroDez}`

        }else{

            aux = numeroDez

        }

    }

    if (numeroOnze % 2 == 0 || numeroOnze % 3 == 0){
        
        if(numeroNove % 2 == 0 || numeroNove % 3 == 0 || numeroDez % 2 == 0 || numeroDez % 3 == 0){

            aux = `${aux} - ${numeroOnze}`

        }else{

            aux = numeroOnze

        }

    }
    
    if (numeroDoze % 2 == 0 || numeroDoze % 3 == 0){
        
        if(numeroNove % 2 == 0 || numeroNove % 3 == 0 || numeroDez % 2 == 0 || numeroDez % 3 == 0 || numeroOnze % 2 == 0 || numeroOnze % 3 == 0){

            aux = `${aux} - ${numeroDoze}`

        }else{

            aux = numeroDoze

        }

    }

    resultadoMultiplos.textContent = aux

}

function ordenar () {

    const numeroTreze = Number(document.getElementById('n13').value)
    const numeroQuatorze = Number(document.getElementById('n14').value)
    const numeroQuinze = Number(document.getElementById('n15').value)
    const numeroDezesseis = Number(document.getElementById('n16').value)
    const numeroDezessete = Number(document.getElementById('n17').value)
    const resultadoOrdernar = document.getElementById('ordenados')

    const menor = Math.min(numeroTreze, numeroQuatorze, numeroQuinze, numeroDezesseis, numeroDezessete)

    const maior = Math.max(numeroTreze, numeroQuatorze, numeroQuinze, numeroDezesseis, numeroDezessete)

    resultadoOrdernar.textContent = `${menor} - ${maior}`

}

botaoSomar.addEventListener('click', somar)
botaoSubtrair.addEventListener('click', subtrair)
botaoMultiplicar.addEventListener('click', multiplicar)
botaoDividir.addEventListener('click', dividir)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', calcularMedia)
botaoSomar3.addEventListener('click', somarTresValores)
botaoVerificar.addEventListener('click', verificarMultiplos)
botaoOrdenar.addEventListener('click', ordenar)
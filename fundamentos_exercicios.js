// Exercicios de fundamentos JavaScript.
// Exercício 1: Olá, Mundo. Crie um script que imprima 'Olá, Mundo!' no console.

console.log('Olá, Mundo!')

// Exercício 2: Conversão de tipos 
// Dado o valor de uma string '1234', converta-o em um número e exiba o tipo da variavel no console.

const valorString = '1234'
const valorNumber = Number(valorString)

console.log(typeof valorNumber)

// Exercicio 3: manipulação de strings
// Dado uma string 'JavaScript é incrível' escreva um código que indique quantos caracteres tem e quantas palavras.

const minhaString = 'JavaScript é Incrível'
console.log(minhaString.length)

const numeroDePalavras = minhaString.split(' ').length
console.log(`O número de palavras é: ${numeroDePalavras}`)

// Exercício 4: loops e arrays
// Crie um array com 5 nomes. Use um loop for para imprimir cada nome no console.

const nomes = ['Gustavo', 'Ketlin', 'Noah', 'Maria', 'Zeni']

for(let i = 0; i <= nomes.length; i++){
    console.log(nomes[i])
}

// Exercicio 5: funções, strings e Math
// Crie uma função que aceita uma string representando um horário em formato de 24 horas.
// A função deve retornar uma string que converta um horário para o formato de 12 horas;
// Use o objeto Math para auxiliar nesta conversão;
// Certifique-se de qe sua função lida corretamente com horários na meia-noite e meio-dia.

function converterHorario(horario24) {
    //const hora = horario24.split(':')[0]
    //const minuto = horario24.split(':')[1]

    const[hora, minuto] = horario24.split(':')

    const hora12 = hora % 12 || 12

    let periodo = 'AM'
    
    if(hora>12){
        periodo = 'PM'
    }
    console.log(`${hora12}:${minuto}:${periodo}`)
}

converterHorario('09:15')
converterHorario('15:30')
converterHorario('22:47')
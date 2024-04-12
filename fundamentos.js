// Fundamentos
// var nome = 'valor'
var minhaVariavel = 'Olá, mundo'

console.log(minhaVariavel)

// Variaveis e tipos de dados
var meuNumero = 10

console.log(meuNumero)

console.log(meuNumero + 5)

console.log('10'+ 5)

console.log(typeof meuNumero)

var booleano = true

console.log(typeof booleano)

var meuObjeto = {}

var meuArray = []

var meuNull = null

var meuUndefined = undefined;

console.log(meuObjeto)
console.log(meuArray)
console.log(meuNull)
console.log(meuUndefined)

// let e const
let x = 10
const y = 5

console.log(typeof x)
console.log(x, y);

// Operadores aritmeticos
console.log(x + y)
console.log(x / y)
console.log(x - y)
console.log(x * y)

// Operadores de comparação
console.log(x == y)
console.log(x != y)

console.log('5' == 5)
console.log('5' === 5)
console.log('5' !== 5)

// Operadores lógicos
// AND &
// OR ||
console.log(10 > 5 && 20 > 5)
console.log(10 > 5 && 20 < 5)
console.log(10 > 5 && 20 < 5)

console.log(10 > 5 || 20 > 5)
console.log(10 < 5 && 20 < 5)

// Conversão de tipos
const meuNumero2 = '123'

const meuNumeroConvertido = Number(meuNumero2)

console.log(meuNumeroConvertido)
console.log(typeof meuNumeroConvertido)

// Estrutura de condição
const idade = 20

if(idade < 13) {
    console.log('Criança')
} else if(idade < 20) {
    console.log('Adolescente')
}else {
    console.log('Adulto')
}

if (false) {
    console.log('Isso executa')
} else {
    console.log('isso agora é executado')
}

// Switch
const fruta = 'Mamão'

switch(fruta){
    case 'Banana':
        console.log('Banana é a fruta!')
        break
    case 'Maçã':
        console.log('Maçã é a fruta!')
        break
    default:
        console.log('Fruta não encontrada')
}

// Estruturas de repetição
for(let i = 0; i < 5; i++) {
    console.log('O valor de i é: ' + i)
}

// While
let k = 0

while (k < 5){
    console.log('O valor é k: ' + k)
    k++
}

// do while
let j = 0

do {
    console.log('O valor de j é: ' + j)

    j++
}while(j < 5)

// Funções
// function nome(arg1, arg2) { corpo }
function cumprimentar (nome) {
    console.log('Olá! ' + nome)
}

// invocação = nome()
cumprimentar('Gustavo')

// escopo de variaveis
let cor = 'azul'

function mostrarCor() {
    let cor = ' verde'

    console.log(cor)
}

console.log(cor)

mostrarCor()

// hoisting = içamento
testeHoisting()

function testeHoisting() {
    console.log('Deu certo')
}

// arrow function
const testeArrow = () => console.log('Isso também é uma função.')
testeArrow()
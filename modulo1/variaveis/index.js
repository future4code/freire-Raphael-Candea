// Exercício1 
let a = 10
let b = 10

console.log(b) // Resposta 10

b = 5
console.log(a, b) // Resposta 10 5

// Exercício 2 
let a = 10
let b = 20
c = a // 10
b = c // 10
a = b // 10

console.log(a, b, c) // Resposta 10 10 10

// Exercício 3
let p = prompt("Quantas horas você trabalha por dia?") // let horasTrabalhadas
let t = prompt("Quanto você recebe por dia?") // let rendaDiaria
alert(`Voce recebe ${t/p} por hora`)

// Exercício escrita 1
let nome
let idade
console.log(typeof nome) // undefined
console.log(typeof idade) // undefined
// Foi impresso porque nada foi atribuido a variável 

let nome = "Bernardo"
let idade = 11

console.log("Qual o seu nome e qual a sua idade?")
console.log(typeof nome)
console.log(typeof idade)
//No nome foi atribuido a string "Bernardo" para variável e na idade foi atribuido 11 para variável

console.log("Olá,", nome, "você tem", idade,"anos")

// Execício escrita 2
let pergunta1 = "Você gosta de praticar esportes?"
let pergunta2 = "Você gosta de ir a praia?"
let pergunta3 = "Você gosta de carro?"
let resposta1 = "Sim"
let resposta2 = "Não"
let resposta3 = "Sim"

console.log(pergunta1,"-", resposta1)
console.log(pergunta2,"-",resposta2)
console.log(pergunta3, "-", resposta3)

// Exercício escrita 3 

let a = 10
let b = 25

c = b
b = a
a = c

console.log(a, b)



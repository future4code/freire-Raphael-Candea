// Exercício 1 
// A false
// B false
// C true
// D boolean

// Exercício 2 
/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
// O código está concatenando e não está somanado

// Exercício 3

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)

console.log("Exercício de escrita de código 1") 

const idadeUsuario = prompt("Digite sua idade")
const idadeMelhorAmigo = prompt("Digite a idade do seu melhor amigo")
console.log("Sua idade é maior do que a do seu amigo?", idadeUsuario > idadeMelhorAmigo)
console.log("Adiferença de idade é de:", Number(idadeUsuario) - Number(idadeMelhorAmigo))

console.log("Exercício de escrita de código 2")

let numPar = prompt("Insira um número par")
console.log("O resto dessa divisão desse número por 2 é:", (numPar % 2))

// O resto da divisão de um número par dividido por 2 será sempre zero
// Quando dividido por um número ímpar o resto será sempre 1

console.log("Exercício de escrita de código 3");

const idadeEmAnos = prompt("Qual a sua idade em anos?");

console.log("Sua idade em meses é:", idadeEmAnos * 12, "meses");
console.log("Sua idade em dias é:", idadeEmAnos * 365, "dias");
console.log("Sua idade em horas é:", idadeEmAnos * 8760, "horas");

console.log("Exercícios de escrita 4")

const num1 = prompt("Insira uma número")
const num2 = prompt("Insira outro número")
const divisivel = num1 % num2
const divisivel1 = num2 % num1
console.log("O primeiro numero é maior que segundo?", num1 > num2)
console.log("O primeiro numero é igual ao segundo?", num1 === num2) 
console.log("O primeiro numero é divisível pelo segundo?", divisivel === 0)
console.log("O segundo numero é divisível pelo primeiro?", divisivel1 === 0)*/

// Desafio
// a)
const tempF = 77
const fParak = (tempF - 32) *(5/9) + 273.15
console.log("77 graus Fahreneit são:",fParak, "em Kelvin")

//b)
const tempC = 80 
const cParaF = (tempC) * (9/5) + 32
console.log("80 graus Celsius são",cParaF, "em Fahreneit")

//c) 
const tempc1 = 30
const celsParaFah = (tempc1) * (9/5) + 32
const fahParaKel = (celsParaFah - 32) *(5/9) + 273.15
console.log("30 graus celsius são:", celsParaFah, "e", fahParaKel, "em Fahreneit")

//d) 

const tempDesejada = prompt("Insira a temperatura em Celsius:")
const celsiusParaFahr = (tempDesejada) * (9/5) + 32
const fahrParaKelv = (celsiusParaFahr - 32) *(5/9) + 273.15
console.log(tempDesejada,"em graus celsius são:", celsiusParaFahr, "e", fahrParaKelv, "em Fahreneit")

// Desafio 2
// a)
const valorQuiloHora = 0.05
const custoMes = valorQuiloHora * 280
console.log("Uma residencia com consumo de 280 quilowatt-hora pagará R$:", custoMes)

//b)
const valorQuiloHora = 0.05
const custoMes = valorQuiloHora * 280
const custoComDesconto = custoMes * 0.85
console.log("Uma residencia com consumo de 280 quilowatt-hora pagará com descontop de 15% R$:", custoComDesconto)
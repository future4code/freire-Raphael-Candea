// Exercícios escrita 1
//A)  5 e 20
//B) ele da erro dizendo que não é uma função

// Exercícios escirta 2
//A) essa função é para o úsuário inserir um texto e passar ele para letras minúsculas e incluir cenoura
//b) I. 


/* Exercícios escrita 1
function sobreMim(){
	console.log("Eu sou Raphael, tenho 38 anos, moro em Teresópolis e sou estudante")

}
sobreMim()

function meusDados(nome, idade, cidade, profissao){
	 
	console.log(`Eu sou ${nome}, tenho ${idade}, sou de ${cidade} e sou ${profissao}`)
}
meusDados("Raphael", 38, "Teresópolis", "estudante")

// Exerercícios escrita 2
//A)

function somaDoisNumeros(a, b){
	return a + b
}

console.log(`A soma dos números é ${somaDoisNumeros(8,9)}`)

//B)
function maiorIgual(num1, num2){
	const verificacao = num1 >= num2
    return `O primeiro número é maior e igual ao segundo: ${verificacao}`
}
console.log(maiorIgual(8,5))

//C)
function seEPar(n1){
	const verificacaoPar = n1 % 2
    return verificacaoPar === 0
}
console.log(seEPar(9))

//D)

function mensagem(texto){
	
	return `${texto.toUpperCase()}, const tamanho = ${texto.length}`
	

}
console.log(mensagem("Bem vindo"))*/

// Exercíco 3
function somar(numero1, numero1){
	return numero1 + numero2

}

function subtrair(numero1, numero1){
	return numero1 - numero2

}

function dividir(numero1, numero1){
	return numero1 / numero2
}

function multiplicar(numero1, numero1){
	return numero1 * numero2
}
let numero1 = +prompt("Digite um número")
let numero2 = +prompt("Difgite outro número")

console.log(`${somar(numero1, numero2)}
${subtrair(numero1, numero2)}
${dividir(numero1, numero2)}
${multiplicar(numero1, numero2)}`)
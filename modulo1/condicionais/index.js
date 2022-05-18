// Exercícios de interpretação escrita
// 1) A) O teste verifuca se o número testado é par
// B) Números pares
// C) Números ímpares

//2) 

// A) Para saber o preço das frutas
// B) O preço da fruta, maçã é R$ 2.25
// C) 5

// 3)
// A) Pedindo para um usuário digitar um número no console
// B) Quando digita 10 Esse número passou no teste e se fosse -10 não apareceria nada
// C) Sim, ele está puxando uma função que não está definida

// Exercícios de escrita de código
// 1)
// let idadeUsuario = +prompt(`Qual a sua idade?`)

// if (idadeUsuario >= 18) {
//     console.log(`Você pode dirigir`)
// } else {
//     console.log(`Você não pode dirigir`)
// }

// 2) 
// let turnoUsuario = prompt('Qual turno você estuda? Digite M para matutino, V para vespertino e N para noturno')

// if (turnoUsuario === 'M') {
//     console.log('Bom dia')
// } else if (turnoUsuario === 'V') {
//     console.log('Boa tarde')
// } else {
//     console.log('Boa noite')
// }

// 3)

// let turnoUsuario = prompt('Qual turno você estuda? Digite M para matutino, V para vespertino e N para noturno')

// switch (turnoUsuario) {
//     case 'M':
//         console.log('Bom dia')
        
//         break;
//     case 'V':
//         console.log('Boa tarde')
    
//         break;

//     case 'N':
//         console.log('Boa noite')

//         break


//     default:
//         break;
// }

// // 4)

// generoDoFilme = prompt('Qual gênero do filme vamos assistir?')
// precoIngresso = prompt('Qual valor do ingresso?')

// if (generoDoFilme === 'Fantasia' && precoIngresso < 15) {
//     console.log('Bom filme')
// } else {
//     console.log('Escolha outro filme')
// }

// Desafio
// 1)

// generoDoFilme = prompt('Qual gênero do filme vamos assistir?')
// precoIngresso = prompt('Qual valor do ingresso?')

// if (generoDoFilme === 'Fantasia' && precoIngresso < 15) {
//     let qualLanche = prompt('Qual lanchinho você vai comprar?') 
//     console.log('Bom filme', 'Aproveite seu',qualLanche)
// } else {
//    console.log('Escolha outro filme')
// }

// 2)

let nomeCompleto = prompt('Qual seu nome completo?')
let tipoDeJogo = prompt('Qual tipo de jogo vai assistir? Use IN internacional ou DO para doméstico').toUpperCase()
let etapaDoJogo = prompt('Qual etapa do jogo vai assistir? Use SF (semi final), DT (disputa terceiro), FI final').toUpperCase()
let categoria = +prompt('Qual a categoria? A 1, 2, 3 ou 4?')
let quantidadeDeIngressos = +prompt('Quantidade de ingressos?')

let valorIngresso

if (tipoDeJogo === 'DO' &&  etapaDoJogo === 'SF' && categoria === 1) {
    console.log('R$ 1.320')
} else if (tipoDeJogo === "DO" && etapaDoJogo === 'SF' && categoria === 2) {
    console.log('R$ 880')
} else if (tipoDeJogo === 'DO' &&  etapaDoJogo === 'SF' && categoria === 3) {
    console.log('R$ 550')
} else if (tipoDeJogo === 'DO' &&  etapaDoJogo === 'SF' && categoria === 4) {
    console.log('R$ 220')
} else if (tipoDeJogo === 'DO' &&  etapaDoJogo === 'DT' && categoria === 1) {
    console.log('R$ ')
}

// let valorIngresso
// switch (valorIngresso) {
//     case 'tipoDeJogo === 'DO' &&  etapaDoJogo === 'SF' && categoria === 1':
//         console.log('R$ 1320')
//         break;
//     case 'tipoDeJogo' === "DO" && etapaDoJogo === 'SF' && categoria === 2':
//         console.log('R$ 880')
//         break


//     default:
//         break;
// }

console.log('----Dados da compra----')
console.log('Nome do cliente:', nomeCompleto)
console.log('Tipo de jogo:', tipoDeJogo)
console.log('Etapa do jogo:', etapaDoJogo)
console.log('Categoria:', categoria )
console.log('Quantidade de ingressos:', quantidadeDeIngressos)
console.log('----Valores----')
console.log('Valor do ingresso:', valorIngresso )
console.log('Valor total', valorIngresso * quantidadeDeIngressos)
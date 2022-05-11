/* Exercícios interpretação de código
1) 
a) undefined
b) null
c) 11
d) 3
e) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f) 9

2) "SUBI NUM ÔNIBUS EM MIRROCOS"

// Exercícios de escrita de código
// 1-
const nomeDoUsuario = prompt(`Digite o nome do usuário`)
const emailDoUsuario = prompt(`Digite seu e-mail`)

console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo ${nomeDoUsuario}!`)

// 2-a)
const comidasPreferidas = ["picanha", "macarrão", "camarão", "batata", "lagosta"]
// b)
console.log(comidasPreferidas)
console.log(`Essas são minhas comidas preferidas`)
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])
 
//c)
const pergComidaPref = prompt(`Qual a sua comida preferida?`)
comidasPreferidas[1] = pergComidaPref
console.log(comidasPreferidas)*/

//3-a)
let listaDeTarefas = []
const primeiraTarefa = prompt(`Qual a primeira tarefa do dia`)
const segundaTarefa = prompt(`Qual a outra tarefa do dia`)
const terceiraTarefa = prompt(`Diga sua última tarefa`)
listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa)

console.log(listaDeTarefas)

const indiceDeTarefa = prompt(`Qual tarefa foi realizada? Digite 0, 1, 2`)
listaDeTarefas.splice(indiceDeTarefa, 1)
console.log(listaDeTarefas)
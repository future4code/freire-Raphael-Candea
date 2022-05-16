// Exercicícios de interpretação 
//1)
 //A) Matheus Nachtergaele
//    Virginia Cavendish
//    canal: "Globo", horario: "14h"

//2) 
//A) nome: "Juca", idade: 3, raca: "SRD"
//  nome: "Juba", idade: 3, raca: "SRD"
//  nome: "Jubo", idade 3, raca: "SRD"
//
//B) puxa as informações do outro objeto

//3)
// false porque era a string atribuida ao backender e undefined porque não tinha nenhuma chave atribuindo valor a altura

// Exercício de escrita de código
// 1) A)
//  const identificacao = {
//  nome: "José",
//  apelidos: ["Zé", "Lindo", "Amigão"],

//  }
//  console.log(`Eu sou ${identificacao.nome}, mas pode me chamar de: ${identificacao.apelidos}`);

// //B)
// const novoObjeto = (identificacao) => {
//     const novosApelidos = {
//     ...identificacao,
//     apelidos: ['Zezinho', 'Junior', 'Paizão'],
//}
// console.log(`Eu sou ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.apelidos}`)
// }

// novoObjeto(identificacao)

// //2) A)

//  const nomeA = {
//      nome: 'Manuel',
//      idade: 25,
//      profissão: "Professor",

//  };

//  const nomeB = {
//      nome: 'José',
//      idade: 38,
//      profissão: 'Marceneiro'

//  };
 
//  const receberObjetos = (pessoa)=> {
//     const novaPessoa = {
//         ...pessoa
//     };
//     console.log([
//         novaPessoa.nome,
//         novaPessoa.nome.length,
//         novaPessoa.idade,
//         novaPessoa.profissão,
//         novaPessoa.profissão.length
//     ])
//  }
//    receberObjetos(nomeA)
//    receberObjetos(nomeB) 

 //3)

 const carrinho = [] 
 
 const sacolaoUm = {
     nome: "Laranja",
     disponibilidade: true
 }

 const sacolaoDois = {
     nome: 'Maça',
     disponibilidade: true,
 }

 const sacolaoTres = {
     nome: "Banana",
     disponibilidade: true
 }

 const receber = (fruta) => {
     const frutas = {
         ...fruta

     }
carrinho.push(frutas)
return carrinho
 }

receber(sacolaoUm)
receber(sacolaoDois)
receber(sacolaoTres)
console.log(carrinho)
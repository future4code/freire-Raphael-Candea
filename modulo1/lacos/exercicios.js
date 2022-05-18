// Exercícios de interpretação 1
// A) Ele esta puxando até 5 e depois somando o valor com i
// B) 10

// 1
//A) 19, 21, 23, 25, 27,30 topdos os números maiores que 18
//B) Sim. Retiraria o if pois o for of já lê todos elementos do array

//3)

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Exercício escrito 

// 1. 

// let quantidadeDePets = +prompt("Quantos pets você tem?")
// let listaPet = []

//  if(quantidadeDePets === 0) {
//      console.log("Que pena! Você pode adotar um pet!")

//  } else {
//      for (let i = 0; i < quantidadeDePets; i++) {
//          const nomePet = prompt("Que legal! Qual nome do seu pet?");
//          listaPet.push(nomePet)

//      }
//  }

// console.log(listaPet)

 //2)
// A)
// let = arrayOrincipal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// const imprimir = (array) => {
//     for (i = 0; i < array.length; i++){
//         console.log(array[i])

//     }
// }
// imprimir(arrayOrincipal)

// B)
// let = arrayOrincipal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// const imprimir = (array) => {
//      for (i = 0; i < array.length; i++){
//          console.log(array[i] / 10)
//         }
//      }
//      imprimir(arrayOrincipal)

//C)
// let arrayOrincipal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// const novaArray = (array) => {
//      for (i = 0; i < array.length; i++){
//          if (array[i] % 2 === 0 )
//          console.log(array[i])
//         }
//      }
//      novaArray(arrayOrincipal)

//D)
let arrayOrincipal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

    for (i = 0; i < arrayOrincipal.length; i++){
            
         console.log(`O elemento index ${i} é ${arrayOrincipal[i]}`)
            }
            
//E)
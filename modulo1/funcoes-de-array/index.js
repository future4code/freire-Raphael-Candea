// Exercícios de interpretação de código
//1) Ele imprime os valores do array separadamente
  
//2) Vai imprimir apenas os nomes como foi solicitado através do return

//3) Vai imprimir todos que não tenham apelido "Chijo" 

//{ nome: "Amanda Rangel", apelido: "Mandi" },
//{ nome: "Laís Petra", apelido: "Laura" },

// Exercícios de escrita de código
//1) 
// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
//]

//A) 
// const nomeDosDogs = pets.map((item) => { 
//    return item.nome
// })
    
// console.log(nomeDosDogs)
 
// B) 
// const nomeDosDogs = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha"
//  })
 
//  console.log(nomeDosDogs)

//C)
//  const nomeDosDogs = pets.filter((item, index, array) => {
//       return item.raca === "Poodle" 
//    })
   
//    const imprimirMsg = nomeDosDogs.map((item) => {
//       return `Você ganhou um cupom de desconto de 10% para tosar o: ${item.nome}`


//    })


//    console.log(imprimirMsg)

// Exercício 2
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//A)
// const nomeItens = produtos.map((item) => { 
//        return item.nome 
//     })
       
//     console.log(nomeItens)

//B)
// const nomeItens = produtos.map((item) => { 
//         return item
//      })
// const desconto = produtos.map((item) => {
//             return {nome:item.nome, preco: item.preco * 0.95}
// })
//      console.log(desconto)

//C) 
// const nomeItens = produtos.filter((item) => { 
//        return item.categoria === "Bebidas"
//     })
       
//     console.log(nomeItens)

//D) 
//  const nomeItens = produtos.filter((item) => { 
//         return item.nome.includes("Ypê")
//          })
          
//          console.log(nomeItens)

//E) 
// const nomeItens = produtos.filter((item) => { 
//          return item.nome.includes("Ypê")

//       })
// const frase = nomeItens.map((item) => {
//    return `Compre ${item.nome} por ${item.preco}`
// })

// console.log(frase)

//  const nomeDosDogs = pets.filter((item, index, array) => {
//       return item.raca === "Poodle" 
//    })
   
//    const imprimirMsg = nomeDosDogs.map((item) => {
//       return `Você ganhou um cupom de desconto de 10% para tosar o: ${item.nome}`


//    })


//    console.log(imprimirMsg)
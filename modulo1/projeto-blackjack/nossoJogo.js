/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 */
  
    function comprarCarta() {
  
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const naipes = ["♦️", "♥️", "♣️", "♠️"]
  const numero = cartas[Math.floor(Math.random() * 13)]
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  
  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else { // Se nao for uma das letras, só converte a string para número
    valor = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor
  }

  return carta
}
let cartaUsuario1 = comprarCarta()
let cartaUsuario2 = comprarCarta()
let cartaComp1 = comprarCarta()
let cartaComp2 = comprarCarta()

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   console.log(`Cartas usuário ${cartaUsuario1.texto + cartaUsuario2.texto}, Pontuação ${cartaUsuario1.valor + cartaUsuario2.valor}`)
   console.log(`Cartas computador ${cartaComp1.texto + cartaComp2.texto}, Pontuação ${cartaComp1.valor + cartaComp2.valor}`)

} else {
	console.log('Muito obrigado! O jogo acabou!')

}

let pontosUsuario = cartaUsuario1.valor + cartaUsuario2.valor
let pontosComp = cartaComp1.valor + cartaComp2.valor

if(pontosUsuario > pontosComp) {
   console.log('Usuário ganhou!')
} else if (pontosUsuario < pontosComp){
   console.log('Computador ganhou!')
} else {
   console.log('Empate')
}

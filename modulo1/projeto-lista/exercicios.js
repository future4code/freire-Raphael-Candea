// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

/* EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  let altura = +prompt(`Digite a altura`)
  let largura = +prompt(`Digite sua largura`)
  
  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = +prompt(`Qual ano atual?`)
  let anoNascimento = +prompt(`Qual seu ano de nascimento`)
  let idade = anoAtual - anoNascimento
  console.log(idade)
  

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura*altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt(`Qual seu nome?`)
  const idadeUsuario = +prompt(`Qual a sua idade?`)
  const emailUsuario = prompt(`Qual seu email`)
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt(`Qual sua cor favorita?`)
  const cor2 = prompt(`Qual a sua outra cor favorita?`)
  const cor3 = prompt(`Qual a sua última cor favorita`)
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase()
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const elemento1 = array[0]
  const elementoFinal = array[array.length - 1]
  array[array.length - 1] = elemento1
  array [0] = elementoFinal
 return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const minusculas = string1.toLowerCase() === string2.toLowerCase()
  return minusculas


}*/

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = +prompt(`Qual ano atual`)
  let anoNascimento = +prompt(`Qual seu ano de nascimento?`)
  let anoEmissao = +prompt(`Qual ano de emissão identidade?`)
   
  let idadeAtual = anoAtual - anoNascimento
  let tempoCarteira = anoAtual - anoEmissao

  let carteiraIdentidadeVinte = idadeAtual <= 20 && tempoCarteira >= 5
  let entreVinteECinquenta = idadeAtual > 20 && idadeAtual <= 50 && tempoCarteira >= 10
  let acimaCinquenta = idadeAtual > 50 && tempoCarteira >= 15

   console.log(carteiraIdentidadeVinte || entreVinteECinquenta || acimaCinquenta)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let multiplosQuatrocentos = ano % 400 === 0
  let multiploQuatro = ano % 4 === 0 && ano % 100 !== 0

  return multiplosQuatrocentos || multiploQuatro
  
 

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idadeLabenu = prompt(`Você tem mais de 18 anos?`)
  let ensinoMedio = prompt(`Você possui  o ensino médio?`)
  let disponibilidade = promt(`Você possui diponibilidade exclusiva durante os horários do curso?`)

  let validacaoIdade = idadeLabenu
  let validacaoEnsino = ensinoMedio 
  let validacaoDisp = disponibilidade

  console.log(validacaoIdade && validacaoEnsino && validacaoDisp)

}
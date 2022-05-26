// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) { 
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = []
    for (let i = 0; i < array.length; i++){
        if( array[i] % 2 ===0) {
            pares.push(array[i])
        } 
    }

    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = []
    for (let i = 0; i < array.length; i++){
        if( array[i] % 2 ===0) {
            pares.push(array[i])
        } 
    }

    return Math.pow(pares)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    
    let maior = -Infinity
    for(let numero of array) {
        if(numero > maior) {
            maior = numero
        }
    } return maior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   

}

//EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let array = [];
   for(let i = 0; array.length < n; i++){
   if (i % 2 === 0) {
       array.push(i);
   }
   return array

   }
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Escaleno";
    } else if(ladoA === ladoB  || ladoB === ladoC || ladoC === ladoA){
        return "Escaleno"
    } else {
        return "Isósceles"
    }

}

//EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
 }
 
 console.log(`Venha assistir ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado po ${filme.atores}`)
 // saída
//  "Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci."
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const outraPessoa = {
        ...cidadao,
        nome: "ANÔNIMO"
    } 
    return outraPessoa
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    }
// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 2
// Exercício original: 02-funcoes/exercicio-02-03.js

// Exercício 2.3 - Retorno Implícito
// Crie arrow functions usando retorno implícito (sem chaves e sem `return`) para:
// - Calcular o quadrado de um número
// - Verificar se um número é par
// - Retornar um objeto com propriedades `nome` e `idade`

const quadrado = value => value * value;
console.log(quadrado(2));


const ehPar = value => value%2 == 0
console.log(ehPar(3));

const nomeEIdade = (nome, idade) => ({nome, idade}) // Nota! Sem os parêntesis
console.log(nomeEIdade("João", 22))                 // {} é lido comom bloco 
                                                    // não como um objeto.
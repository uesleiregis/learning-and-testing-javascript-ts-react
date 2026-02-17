// Exercício 1.1 - Declaração de Variáveis
// Declare uma variável `nome` usando `let`, uma variável `idade` usando `const` e uma variável `cidade` usando `var`.
// Atribua valores iniciais a cada uma.
// Em seguida, tente reatribuir novos valores para as três variáveis.
// Anote qual delas permite reatribuição e qual gera erro.


let nome = "Maria"
const idade = 23
var cidade = "Porto Alegre"

console.log(nome, idade, cidade)

nome = "Joana"
//const idade = 23                      // não permite reatribuição
var cidade = "Porto Alegre"             // Nota!! Var permite redeclaração.

console.log(nome, idade, cidade)



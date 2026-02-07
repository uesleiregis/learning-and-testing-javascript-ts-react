// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 14
// Exercício original: 01-fundamentos/exercicio-01-10.js

// Exercício 1.10 - Ternário
// Crie uma função `classificarIdade(idade)` que use o operador ternário para retornar "maior de idade"
// se idade >= 18, ou "menor de idade" caso contrário.
// A sintaxe deve ser: `return condicao ? valorSeTrue : valorSeFalse;`


const classificarIdade = idade => idade >= 18 ? "maior de idade": "menor de idade"
console.log(classificarIdade(8));
console.log(classificarIdade(18));
console.log(classificarIdade(20));



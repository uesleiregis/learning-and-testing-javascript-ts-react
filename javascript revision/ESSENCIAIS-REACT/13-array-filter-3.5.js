// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 13
// Exercício original: 03-arrays/exercicio-03-05.js

// Exercício 3.5 - Filter
// Dado um array de números, use `filter` para:
// - Obter apenas números pares
// - Obter apenas números maiores que 10
// - Obter apenas números positivos
// - Combinar múltiplas condições


const nums = [-1, -30, -67, 1, 2, 5, 3, 7, 20, 22, 76, 77, 34, 33, 23]

// PARES
const pares = nums.filter(e => e % 2 == 0)
console.log(pares);

// MAIOR QUE 10
const maiorQue10 = nums.filter(e => e > 10)
console.log(maiorQue10);

// POSITIVOS
const numPositivos = nums.filter(e => e > 0)
console.log(numPositivos);

// MULTIPLAS CONDICOES
const numMultCond = nums.filter(e => (e % 2 == 0 && e > 10))
console.log(numMultCond);


// Extra: Encadeamento de operações.
const resultado = nums
    .filter(e => e > 0)
    .filter(e => e % 2 === 0)
    .map(e => e * 2);
console.log("Encadeando métodos", resultado);

const res = nums
    .filter(e => e % 2)
    .filter(f => f < 10)
    .map(g => g * 2)

console.log("multiplas operacoes, encadeando métodos\n",res);


// Boas práticas:
/* 
Usar === ao invés de ==


emcadeamento de métodos muito usado em React
const resultado = nums
    .filter(e => e > 0)
    .filter(e => e % 2 === 0)
    .map(e => e * 2);


*/
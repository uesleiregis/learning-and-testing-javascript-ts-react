// Exercício 1.2 - Tipos Primitivos
// Crie 7 variáveis, cada uma com um tipo primitivo diferente:
// - `texto`: uma string qualquer
// - `numero`: um valor numérico
// - `booleano`: true ou false
// - `indefinido`: undefined
// - `nulo`: null
// - `simbolo`: Symbol('descricao')
// - `numeroGigante`: 123456789012345678901234567890n
//
// Use `console.log(typeof variavel)` em cada uma e observe os resultados.
// Note que `typeof null` retorna algo inesperado!

let text = "Mamae"
let number = 2
let boll = true
let age = 22

let variavel = undefined
let myNull = null
let simbolo = Symbol("Não sei do que se trata")
let numGigante = 123456789012345678901234567890n

console.log(
    typeof (text), typeof (number), typeof (boll), typeof (age), typeof (variavel), typeof (myNull), typeof (simbolo), typeof (numGigante)
)

/*
Symbol em javascript é um tipo de dado primitivo que representa um identificador único e imutável.
- é invisível a loops normais.
---
const sym1 = Symbol('descricao');
const sym2 = Symbol('descricao');

console.log(sym1 === sym2); // false (sempre únicos!)
console.log(typeof sym1);   // "symbol"
---
const plugin1 = { [Symbol('config')]: {} };
const plugin2 = { [Symbol('config')]: {} };
// Não colidem, mesmo com mesmo nome
---
Quando usar?
Propriedades que você quer "ocultar"
Evitar conflitos em bibliotecas
Criar objetos iteráveis customizados
Caso avançado de programação

*/
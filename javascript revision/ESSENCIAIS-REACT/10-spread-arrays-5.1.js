// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 10
// Exercício original: 05-es6-features/exercicio-05-01.js

// Exercício 5.1 - Spread em Arrays
// Use spread operator para:
// - Concatenar arrays
// - Adicionar elementos no início/meio/fim de um array
// - Criar cópia de array
// - Passar array como argumentos para função

// Arrays de exemplo:

// 1. Array de números
const numeros = [1, 2, 3, 4, 5];

// 2. Array de frutas
const frutas = ["maçã", "banana", "laranja"];

// 3. Outro array de frutas para concatenação
const maisFrutas = ["uva", "pera"];


// CONCATENADO
const concatenado = [...numeros, ...frutas, ...maisFrutas]
console.log(concatenado);


//Remove o ÚLTIMO elemento
const removeLast = numeros.pop() // retorna o ELEMENTO removidod
console.log(removeLast, numeros);

console.log(frutas);
const removeLastFrut = frutas.pop()
console.log(removeLastFrut, frutas);


//Remove o PRIMEIRO elemento
const removeFirst = numeros.shift() // retorna o ELEMENTO removido
console.log(removeFirst, numeros);

const removeFirstFrut = frutas.shift()
console.log("Remove primeiro\n",frutas, removeFirstFrut, frutas);


//Adicionar Elementos ao Inicio UNSHIFT
const addFirst = numeros.unshift(3) // retorna total de elementos
console.log(addFirst, numeros);

console.log("Adicionar no Início do Array");
console.log("Antes de Adicionar", frutas);
const addFisrtFlores = flores.unshift("Tulipas")
console.log("Depois", addFisrtFlores, frutas); 

//Adicionar Elementos ao Fim PUSH
const addEnd = numeros.push(7) // retorna o total de lementos
console.log(addEnd, numeros);

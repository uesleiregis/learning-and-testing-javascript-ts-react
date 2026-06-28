// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 23
// Exercício original: 03-arrays/exercicio-03-07.js

// Exercício 3.7 - Reduce
// O método reduce é ESSENCIAL em React para:
// - Calcular totais (carrinho de compras)
// - Transformar arrays em objetos (estados agrupados)
// - Criar pipelines de dados complexos
//
// Sintaxe: array.reduce((acumulador, elemento) => novoAcumulador, valorInicial)

// ========================================
// TAREFAS
// ========================================


// TAREFA 1: Somar todos os números do array
// Resultado esperado: 150
// Escreva aqui:
const  nums = [10, 20, 30, 40, 50];
const sum = nums.reduce(
    (acc, value) => acc + value
)
    console.log("Task 1: ",sum);
// TAREFA 2: Calcular a média das notas
const notes = [7.5, 8, 9.5, 6, 8.5];

// Resultado esperado: ~7.9
// Escreva aqui:
const averageNotes = notes.reduce(
    (acc, value) => (value) + acc
)/notes.length

console.log("Task 2: ",averageNotes);

// TAREFA 3: Contar quantas vezes cada fruta aparece

const fruits = ["maçã", "banana", "maçã", "laranja", "banana", "banana", "maçã"];
// Resultado esperado: { maçã: 3, banana: 3, laranja: 1 }
// Escreva aqui:
const countFruits = fruits.reduce((acc, value) => {
    acc[value] = (acc[value] ?? 0) + 1;
    return acc;
}, {})


/* const contaFrutas = frutas.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1
    return acc
}, {}) */

console.log("Task 3: ",countFruits);

// TAREFA 4: Achatar o array de arrays em um único array 
// (muito usado em React com múltiplos arrays!)
const arraysAninhados = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
];
// Resultado esperado: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Escreva aqui:

const arraysChatos = arraysAninhados.reduce(
    (acc, value) => {
        if(Array.isArray(value))
            acc.push(...value)
        else
            acc.push(value)
        return acc
    }, [])

/* const arraysAchatados = arraysAninhados.reduce((acc, value) => {
    if(Array.isArray(value))
        acc.push(...value)
    else
        acc.push(value)
    return acc
},[]) */

console.log("Task 4: ", arraysChatos);

// ========================================
// FUNÇÃO: Achatar arrays com qualquer nível. // TODO Refazer esta atividade, lógica interessante.
// ========================================
const flatAnylevel = (arr) => {
    return arr.reduce((acc, value) => 
        Array.isArray(value) 
            ? acc.concat(flatAnylevel(value))  // Recursão para sub-arrays
            : acc.concat(value)                // Elemento simples
    , [])
}

// Teste com arrays de vários níveis:
const arrayCompletoAninhado = [1, [2, [3, [4, 5]]], 6, [[7, 8], 9]];
console.log("Array achatado (qualquer nível):", flatAnylevel(arrayCompletoAninhado));
// Resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// TAREFA 5: Agrupar vendas por categoria (retornar objeto com arrays) // TODO Falta esta questão
const vendas = [
    { produto: "Notebook", categoria: "Eletrônicos", preco: 3000 },
    { produto: "Mouse", categoria: "Periféricos", preco: 50 },
    { produto: "Monitor", categoria: "Eletrônicos", preco: 1200 },
    { produto: "Teclado", categoria: "Periféricos", preco: 300 },
    { produto: "Webcam", categoria: "Periféricos", preco: 150 }
];


const vendasPorCategoria = vendas.reduce(
    (acc, value) => {
        acc[value.categoria] = acc[value.categoria] || []
        acc[value.categoria].push(value)
        return (acc)
    }, {})

console.log(vendasPorCategoria);

// Resultado esperado: {
//   Eletrônicos: [...produtos eletrônicos],
//   Periféricos: [...outros periféricos]
// }
// Escreva aqui:
/* const vendasCategorizado = vendas.reduce((acc, el)=>{
    acc[el.categoria] = acc[el.categoria] || []
    acc[el.categoria].push(el)
    return acc
}, {})

console.log(vendasCategorizado); */
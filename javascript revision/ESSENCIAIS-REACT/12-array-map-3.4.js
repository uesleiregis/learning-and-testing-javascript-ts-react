// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 12
// Exercício original: 03-arrays/exercicio-03-04.js

// Exercício 3.4 - Map
// Dado um array de objetos representando produtos (nome, preço), use `map` para:
// - Criar um array apenas com os nomes
// - Criar um array com os preços com desconto de 10%
// - Criar um array de elementos JSX simulados (strings no formato `<li>nome - R$ preço</li>`)

// Array de objetos com produtos:
const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 800 }
];

// PISTA: O map() transforma cada elemento do array em um novo elemento.
// Ele retorna um novo array com o mesmo tamanho do original, mas com valores transformados.
// Acesse as propriedades do objeto dentro do callback usando a notação de ponto (produto.nome, produto.preco).


// PARTE A
const nomes = produtos.map(e => e.nome)
console.log(nomes);

// PARTE B
const precosDesconto10 = produtos.map(e => e.preco * 0.9)
console.log(precosDesconto10);

// PARTE C
const arrElements = produtos.map(e => `<li>${e.nome} - R$ ${e.preco}</li>`)
console.log(arrElements);

// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 5
// Exercício original: 04-objetos/exercicio-04-06.js

// Exercício 4.6 - Destructuring com Valores Padrão
// Extraia propriedades que podem não existir, fornecendo valores padrão.

const produto = {
    id: 101,
    nome: "Notebook",
    preco: 3500,
    estoque: 15,
    categoria: "Eletrônicos"
};

const {endereco = "Rua da Margarida", numero = 13, nome: nomeProduto} = produto

console.log(`
    O endereço é \"${endereco}, nº${numero}\".
    Produto: ${nomeProduto}.`
);
//As variáveis que não existem apenas serão uma nova variável.
// ...Isso não altera o objeto original.
// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 6
// Exercício original: 04-objetos/exercicio-04-07.js

// Exercício 4.7 - Destructuring Aninhado
// Dado um objeto com objetos aninhados, extraia propriedades profundas usando destructuring aninhado.

const pedido = {
    id: 5001,
    cliente: {
        nome: "Ana",
        endereco: {
            rua: "Avenida. Central",
            numero: 100,
            cidade: "São Paulo"
        }
    },
    itens: [
        {
            produto: "Notebook",
            quantidade: 1
        },
        {
            produto: "Mouse", quantidade: 2
        }
    ]
}

const {cliente: {nome, endereco: {rua, numero}}, itens} = pedido
//const {produto: primeiroProduto} = itens[0];

const { itens: [ { produto: primeiroProduto } ] } = pedido; // outra forma

console.log(nome, rua, numero, primeiroProduto);

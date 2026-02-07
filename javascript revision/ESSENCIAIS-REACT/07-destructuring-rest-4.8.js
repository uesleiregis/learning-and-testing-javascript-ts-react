// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 7
// Exercício original: 04-objetos/exercicio-04-08.js

// Exercício 4.8 - Rest em Destructuring
// Use o operador rest (`...`) para extrair algumas propriedades e capturar o restante em um novo objeto.

const usuario = {
    id: 42,
    nome: "Carlos",
    email: "carlos@email.com",
    idade: 28,
    cidade: "Belo Horizonte",
    profissao: "Engenheiro",
    ativo: true
};

const {nome, idade, ... resto} = usuario
console.log(nome, idade)
console.log(resto);

// ------ 

const numbers = [10, 20, 30, 40, 50, 60]
const [first, second, ...stash] = numbers

console.log(first, second);
console.log(stash);


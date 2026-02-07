// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 8
// Exercício original: 04-objetos/exercicio-04-09.js

// Exercício 4.9 - Copiar e Mesclar Objetos
// Use spread operator para:
// - Copiar um objeto (shallow copy)
// - Mesclar dois ou mais objetos
// - Sobrescrever propriedades específicas

// Objetos de exemplo:

// 1. Objeto de usuário básico
const usuario = {
    nome: "João",
    idade: 30,
    email: "joao@email.com"
};

// 2. Objeto de configurações de aplicativo
const config = {
    tema: "escuro",
    idioma: "pt-BR",
    notificacoes: true
};

// 3. Objeto de produto
const produto = {
    nome: "Notebook",
    preco: 2500,
    categoria: "Eletrônicos"
};

// 4. Objeto para atualização (exemplo para mesclar e sobrescrever)
const atualizacao = {
    preco: 2700,
    desconto: 10
};

// CÓPIA um Objeto com Spread operator.
const copiaUsuario = {...usuario}
console.log(copiaUsuario);


// MESCLAR        // quando se repete a chave, o último a adicionar a chave sobrescreve o valor
const mesclado = {...usuario, ...config , ...produto} // mesclei 3 objetos em 1
console.log(mesclado);

// SOBRESCREVER
const novoProduto = {...produto, ...atualizacao}
console.log(novoProduto);

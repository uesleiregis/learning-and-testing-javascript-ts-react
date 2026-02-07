// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 3
// Exercício original: 04-objetos/exercicio-04-04.js
// EXERCÍCIO APRIMORADO

// Exercício 4.4 - Destructuring Básico
// Dado um objeto `usuario` com várias propriedades, extraia propriedades específicas usando destructuring.

const usuario = {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    idade: 28,
    cidade: "São Paulo",
    profissao: "Desenvolvedor",
    ativo: true
};


const {nome, email, idade} = usuario;
// Posso pegar apenas as variaveis que eu quero.

console.log(`O nome é ${nome} e o email é ${email}`);


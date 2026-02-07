// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 9
// Exercício original: 04-objetos/exercicio-04-10.js

// Exercício 4.10 - Atualização Imutável
// Pratique atualizar objetos de forma imutável (sem modificar o original):
// - Atualizar uma propriedade
// - Adicionar uma nova propriedade
// - Remover uma propriedade (combine spread com destructuring)
// - Atualizar propriedade aninhada

// Objetos de exemplo:

// 1. Objeto de usuário com propriedades simples
const usuario = {
    nome: "Ana",
    idade: 25,
    email: "ana@email.com"
};

// Propriedade idade atualizada
const usuarioAtualizado = {...usuario, idade: 33}
console.log(usuarioAtualizado);

// Propriedade profissão adicionada
const usuarioAtualizadoMaisProfissao = {...usuarioAtualizado, profissao: "CabeleleilaLeila"}
console.log(usuarioAtualizadoMaisProfissao);

// 2. Objeto de usuário com propriedades aninhadas
const usuarioAninhado = {
    nome: "Carlos",
    idade: 30,
    endereco: {
        rua: "Rua das Flores",
        numero: 456,
        cidade: "Rio de Janeiro"
    }
};

// Remover uma propriedade
const {nome, ...semNome} = usuario
console.log(semNome);

// Remover nome e rua de usuarioAninhado
const {nome: nome2, endereco: {rua, ...enderecoRest}, ...rest} = usuarioAninhado // Quebrar

const usuarioFinal = {...rest, endereco:{...enderecoRest}} // Comport

console.log(usuarioFinal);


/*
Nota!!
O rest em objetos pega o restante dos objetos, não importa se vem antes ou depois.
Se vc pegou o do meio, ele captura as propriedade das extremidades e assim por diante.
 */


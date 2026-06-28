// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 18
// Exercício original: 01-fundamentos/exercicio-01-07.js

// Exercício 1.7 - Optional Chaining
// Crie um objeto `usuario` com a seguinte estrutura:
// const usuario = {
//   nome: "Ana",
//   endereco: {
//     rua: "Av. Paulista",
//     numero: 1000
//   }
// };
// Tente acessar:
// - `usuario.endereco.rua` (existe)
// - `usuario.endereco.complemento` (não existe)
// - `usuario.contato.email` (contato não existe - causaria erro!)
//
// Use `?.` para acessar `usuario.contato?.email` e `usuario.endereco?.complemento` com segurança.

const usuario = {
    nome: "Ana",
    endereco: {
        rua: "Av. Paulista",
        numero: 1000
    }
};

console.log(usuario.contato?.email)
console.log(usuario.endereco?.complemento);
console.log(usuario.endereco?.rua)



/*
Verifica se a propriedade existe antes de acessá-la.
Se existir, acessa normalmente.
Se não existir, retorna undefined sem retornar erro.

usuario?.contato?.email
!! A '?' vem depois do que será protegido, 
para este caso, 'usuario' e 'contato'. Se contato ou usuario 
for 'null' ou 'undefined' retorna 'undefined' sem erro.

usuario.contato?.email
// Nesse caso, assume que usuario existe, mas protege contato.

obs: pode ser capturado por try - catch (sem o optional chaining )
 */
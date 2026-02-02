// Exercício 1.7 - Optional Chaining
// Crie um objeto `usuario` com a seguinte estrutura:
// const usuario = {
//   nome: "Ana",
//   endereco: {
//     rua: "Av. Paulista",
//     numero: 1000
//   }
// };
//
// Tente acessar:
// - `usuario.endereco.rua` (existe)
// - `usuario.endereco.complemento` (não existe)
// - `usuario.contato.email` (contato não existe - causaria erro!)
//
// Use `?.` para acessar `usuario.contato?.email` e `usuario.endereco?.complemento` com segurança.

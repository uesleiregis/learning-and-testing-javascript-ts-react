// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 16
// Exercício original: 05-es6-features/exercicio-05-04.js

// Exercício 5.4 - Interpolação Básica
// Crie strings complexas usando template literals com:
// - Variáveis
// - Expressões
// - Chamadas de função

const variavel = `VARIÁVEL`
const string = `Essa string tem ${variavel}, a expressão: 2 + 2 = ${2+2} e ${f(variavel)}`
const string2 = `${variavel == "VARIAVEL" ? "É isso mesmo": "ops"}`
console.log(string2)

function f(x){
    if (x == "VARIÁVEL")
        return "Chamada Função"
    return ""
}

console.log(string)
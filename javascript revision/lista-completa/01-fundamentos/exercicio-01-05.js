// Exercício 1.5 - Operadores Lógicos
// Crie uma função `validarLogin(email, senha)` que retorne:
// - `true` se email E senha não estiverem vazios (use `&&`)
//
// Depois crie uma função `temContato(email, telefone)` que retorne `true` se pelo menos um dos dois
// estiver preenchido (use `||`)
//
// Por fim, crie uma função `naoEstaVazio(valor)` que use `!` para inverter o resultado de verificar
// se o valor está vazio

function validarLogin(email, senha) {
    return email !== "" && senha !== "";
}

function temContato(email, telefone) {
    return email !== "" || telefone !== "";
}

function naoEstaVazio(valor) {
    return valor !== "";
}

// Testes:
console.log(validarLogin("user@email.com", "123"));  // true
console.log(validarLogin("", "123"));                 // false
console.log(validarLogin("user@email.com", ""));      // false

console.log(temContato("user@email.com", ""));        // true
console.log(temContato("", "11999999999"));           // true
console.log(temContato("", ""));                      // false

console.log(naoEstaVazio("texto"));                   // true
console.log(naoEstaVazio(""));                        // false
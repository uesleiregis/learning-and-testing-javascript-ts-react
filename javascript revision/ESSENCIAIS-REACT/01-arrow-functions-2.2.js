// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 1
// Exercício original: 02-funcoes/exercicio-02-02.js

// Exercício 2.2 - Arrow Functions
// Converta as seguintes funções tradicionais para arrow functions:
// - Uma função que retorna a soma de dois números
// - Uma função que recebe um array e retorna o dobro de cada elemento
// - Uma função que não recebe parâmetros e retorna a data atual

const soma = (a , b) => a + b;
console.log(soma(2,3));

// Solução 1: for ... of iterando sobre valores

const oDobro = arr => {
    let myArr = []
    for (let v of arr)
        myArr.push(v * 2)
    return myArr
}

// Solução 2: Usando map (MELHOR para React - funcional)

const oDobro2 = arr => arr.map(value => value * 2)
console.log(oDobro2([2,3,4]))

const oTriplo = arr => arr.map(x => x*2)


// Solução 3: Utilizando for...in

const oDobro3 = arr => {
    let myArr = []
    for( let i in arr)
        myArr.push(arr[i] * 3)
    return myArr
}
 
// Retorna a Data Atual
const date = () => new Date();
console.log(date());


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


//const today = () => new Date(); 


// Solução 1: for ... of iterando sobre valores

const double = arr => {
	let res = [];
    arr.forEach(element => {
    	res.push(element * 2);
	});
	return (res);
}
console.log(double([2,3,4]));

// Outra forma, usando for ... of
const oDobro = arr => {
    let myArr = []
    for (let v of arr)
        myArr.push(v * 2)
    return myArr
}
console.log(oDobro([2,3,4]));

const dobrado = arr => {
	let myArr = [];
	for (let e of arr)
		myArr.push(e * 2);
	return (myArr);
}
console.log(dobrado([2,3,4,5]))

// Solução 2: Usando map (MELHOR para React - funcional)

const oDobro4 = arr => arr.map( value => value * 2);
console.log(oDobro4([4,5,6]));


// Solução 3: Utilizando for...in
// Menos comum para arrays, mais comum para objetos.

const oDobro3 = arr => {
	let res = [];
	for (x in arr)
		res.push(arr[x] * 2);
	return (res);
}
console.log(oDobro3([2,3,4,5,6,7]));

 
// Retorna a Data Atual


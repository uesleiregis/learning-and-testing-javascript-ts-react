// Exercício 1.4 - Template Literals
// Crie uma função `apresentar(nome, idade, cidade)` que retorne a seguinte frase usando template literals:
// "Olá, meu nome é [nome], tenho [idade] anos e moro em [cidade]."
// Teste a função com valores como `apresentar("João", 25, "São Paulo")`.

function apresentar(nome, idade, cidade){
    return `
    Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.
    É o jeito morar aqui em ${cidade}.`
    // O enter é considerado dentro do template string.
}

let res = apresentar("joão", 23, "Alagoinha")
console.log(res);

// Nota!
// Digitar log+tab --> console.log() :-) snipet

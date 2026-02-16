// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 24
// Exercício original: 06-assincronismo/exercicio-06-04.js

// Exercício 6.4 - Criando Promises
// Crie Promises do zero usando o constructor `new Promise()`:
// - Promise que resolve com sucesso
// - Promise que rejeita com erro
// - Promise que resolve após um tempo

// SOLUÇÃO DA TIVIDADE
// 1 - Promisse sucesso
const fazerSaque = new Promise((deubom, deuruim) => {
    console.log("Simulando saque.");
    deubom("Saque bem sucedido");
});


fazerSaque
    .then((res) =>{
        console.log(res);
    });

// 2 - Promisse falha

const comprarPao = new Promise((sucesso, falha) =>{
    console.log("Iniciando solicitacao para compra do pao...");
    falha("Hoje não tem pão. Lamentamos!");
});

comprarPao.then((res)=>{
    console.log("Teste pao");
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// EXEMPLO 1

// Simulando uma busca de dados bem sucedida
const buscarDados = new Promise((resolve, reject) => {
    console.log("Buscando dados do servidor...");

    // Simulando sucesso
    resolve("Dados buscados com sucesso!");
});

// Como usar a promise:
buscarDados.then((resultado) => {
    console.log(resultado); // Dados carreegados com sucesso.

});

/*
Buscando dados do servidor...
Dados buscados com sucesso!
*/


//Exemplo 2: Simulando requisição que falha

const loginUsuario = new Promise((res, rej) => {
    console.log("Tentando fazer o login");

    // Simulando o erro.
    rej("Senha incorreta!!!")

});

// Como utilizar
loginUsuario
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.log(erro);
    })


/*
Tentando fazer o login
Senha incorreta!!!
*/

// Promise qu eresolve após alguns segundos
const entregarPizza = new Promise((resolve, reject)=>{
    console.log("Pedido de pizza feito...");

    setTimeout(()=>{
        resolve("A Pizza chegou!")
    },2000); // Demora 2 segundos
});

entregarPizza
.then((resultado)=>{
    console.log(resultado); // Após e segundos
});

/*
 Pedido de pizza feito...
 A Pizza chegou!
*/
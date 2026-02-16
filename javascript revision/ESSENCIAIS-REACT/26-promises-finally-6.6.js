// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 26
// Exercício original: 06-assincronismo/exercicio-06-06.js

// Exercício 6.6 - Finally
// Use `.finally()` para executar código independente de sucesso ou falha da Promise.

// ========================================
// EXERCÍCIO COMPLETO: Pedido de Compra com Promise
// ========================================
// 1. Crie uma Promise chamada `fazerPedido` que simula um pedido de compra.
//    - Se `temEstoque` for true, resolva com a mensagem: "Pedido aprovado!"
//    - Se `temEstoque` for false, rejeite com a mensagem: "Produto esgotado."
// 2. Use `.then()` para mostrar a mensagem de sucesso.
// 3. Use `.catch()` para mostrar a mensagem de erro.
// 4. Use `.finally()` para mostrar: "Processo finalizado."
//
// DICA: Altere o valor de `temEstoque` para testar os dois fluxos.

// Escreva aqui:

const temEstoque = Math.random() > 0.5; // Troque para true/false para testar

const fazerPedido = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (temEstoque) {
            resolve("Pedido aprovado!");
        } else {
            reject("Produto esgotado.");
        }
    }, 1000);
});

fazerPedido
    .then(msg => console.log(msg))
    .catch(erro => console.log(erro))
    .finally(() => console.log("Processo finalizado."));

// ========================================
// EXERCÍCIO: Reserva de Voo com Promise
// ========================================
// 1. Crie uma Promise chamada `reservarVoo` que simula a reserva de um voo.
//    - Se `assentoDisponivel` for true, resolva com a mensagem: "Reserva confirmada!"
//    - Se `assentoDisponivel` for false, rejeite com a mensagem: "Voo lotado."
// 2. Use `.then()` para mostrar a mensagem de sucesso.
// 3. Use `.catch()` para mostrar a mensagem de erro.
// 4. Use `.finally()` para mostrar: "Processo de reserva encerrado."
//
// DICA: Altere o valor de `assentoDisponivel` para testar os dois fluxos.
//
// Escreva sua solução abaixo:

const reservarVoo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const assentoDisponivel = false // simulando a resposta
        assentoDisponivel
        ? resolve("Reserva confirmada!")
        : reject("Erro ao confirmar a reserva.")
    },4000)
})

reservarVoo
.then(msg => console.log(`Tudo certo!${msg}`))
.catch(error => console.log(`Ops! ${error}`))
.finally(()=> console.log("Processo de reserva encerrado."))
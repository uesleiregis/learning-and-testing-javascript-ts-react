// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 28
// Exercício original: 06-assincronismo/exercicio-06-14.js

// Exercício 6.14 - Funções Async Básicas
// Converta funções que retornam Promises para usar `async/await`:
// - Declare funções com `async`
// - Use `await` para esperar Promises
// - Compare a legibilidade com `.then()`

// Objetivo do exercicio:
// 1) Ler funcoes que usam Promise + .then()
// 2) Reescrever com async/await mantendo o mesmo resultado
// 3) Perceber como o fluxo fica mais linear e facil de ler

// Exemplo resolvido (antes/depois)

// Antes: Promise + .then()
function buscarUsuarioPromise(id) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id, nome: "Ada" });
		}, 300);
	});
}

function saudacaoPromise(id) {
	return buscarUsuarioPromise(id).then((usuario) => {
		return `Ola, ${usuario.nome}!`;
	});
}

saudacaoPromise(1).then((mensagem) => {
	console.log("Promise:", mensagem);
});

// Depois: async/await
async function buscarUsuarioAsync(id) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id, nome: "Ada" });
		}, 300);
	});
}

async function saudacaoAsync(id) {
	const usuario = await buscarUsuarioAsync(id);
	return `Ola, ${usuario.nome}!`;
}

saudacaoAsync(1).then((mensagem) => {
	console.log("Async/Await:", mensagem);
});

// Tarefas para praticar:
// 1) Transforme as funcoes abaixo para async/await.
// 2) Garanta que o comportamento final continue igual.

function carregarProdutoPromise(id) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id, nome: "Teclado", preco: 150 });
		}, 250);
	});
}

function formatarProdutoPromise(id) {
	return carregarProdutoPromise(id).then((produto) => {
		return `Produto: ${produto.nome} - R$ ${produto.preco}`;
	});
}

formatarProdutoPromise(10).then((resultado) => {
	console.log("Antes:", resultado);
});

// Reescreva daqui para baixo usando async/await
// Dica: as funcoes precisam continuar retornando Promise.

// function carregarProdutoAsync(id) {
// }

// function formatarProdutoAsync(id) {
// }

// formatarProdutoAsync(10).then((resultado) => {
//   console.log("Depois:", resultado);
// });

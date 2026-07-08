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

async function carregarProdutoAsync(id) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id, nome: "Teclado", preco: 150 });
		}, 250);
	});
}

async function formatarProdutoAsync(id) {
	const produto = await carregarProdutoAsync(id);
	return `Produto: ${produto.nome} - R$ ${produto.preco}`;
}

formatarProdutoAsync(10).then((resultado) => {
	console.log("Depois:", resultado);
});

// ========================================
// EXEMPLO ADICIONAL: Buscar usuário e seus pedidos
// ========================================

// Versão com Promise + .then()
function buscarUsuarioPedidosPromise(userId) {
	return buscarUsuarioPromise(userId).then((usuario) => {
		return buscarPedidosPromise(usuario.id).then((pedidos) => {
			return `${usuario.nome} tem ${pedidos.length} pedidos`;
		});
	});
}

function buscarPedidosPromise(userId) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: 1, valor: 100 },
				{ id: 2, valor: 250 },
				{ id: 3, valor: 75 }
			]);
		}, 200);
	});
}

buscarUsuarioPedidosPromise(1).then((resultado) => {
	console.log("Com Promises:", resultado);
});

// Versão com async/await (MAIS LIMPA)
async function buscarUsuarioPedidosAsync(userId) {
	const usuario = await buscarUsuarioAsync(userId);
	const pedidos = await buscarPedidosAsync(usuario.id);
	return `${usuario.nome} tem ${pedidos.length} pedidos`;
}

async function buscarPedidosAsync(userId) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: 1, valor: 100 },
				{ id: 2, valor: 250 },
				{ id: 3, valor: 75 }
			]);
		}, 200);
	});
}

buscarUsuarioPedidosAsync(1).then((resultado) => {
	console.log("Com Async/Await:", resultado);
});

// ========================================
// EXERCÍCIO DE FIXAÇÃO 1: Buscar livro e autor
// ========================================
// Reescreva as funções abaixo usando async/await
// Dica: siga o mesmo padrão dos exercícios acima

function buscarLivroPromise(livroId) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id: livroId, titulo: "JavaScript Avançado", autorId: 5 });
		}, 200);
	});
}

function buscarAutorPromise(autorId) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id: autorId, nome: "Douglass Crockford" });
		}, 200);
	});
}

// Usando clousure para acessar as variáveis do escopo.
function obterLivroComAutorPromise(livroId) {
	return buscarLivroPromise(livroId).then((livro) => {
		return buscarAutorPromise(livro.autorId).then((autor) => {
			return `"${livro.titulo}" escrito por ${autor.nome}`;
		});
	});
}

// Outra forma: sem usar clousure para acessar as variáveis do escopo
/* 
function obterLivroComAutorPromise(livroId)
{
	let livroData;
	return buscarLivroPromise(livroId)
		.then((livro) => {
			livroData = livro;  // ← Salvar externamente
			return buscarAutorPromise(livro.autorId);
		})
		.then((autor) => {
			return `"${livroData.titulo}" escrito por ${autor.nome}`;
		});
}
*/

/* 
Obs: Também obteria um resultado parecido carregando as variáveis necessárias...
... no encadeamento da Promise (poderia retornar um objeto.)
*/

obterLivroComAutorPromise(1).then((resultado) => {
	console.log("Exercício 1 (Promise):", resultado);
});

// Reescreva daqui para baixo com async/await:
async function buscarLivroAsync(livroId) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id: livroId, titulo: "JavaScript Avançado", autorId: 5 });
		}, 200);
	});
}

async function buscarAutorAsync(autorId) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id: autorId, nome: "Douglass Crockford" });
		}, 200);
	});
}

async function obterLivroComAutorAsync(livroId) {

	const livro = buscarLivroAsync(livroId);
	const autor = buscarLivroAsync(livro.autorId);

	return `"${livro.titulo}" escrito por ${autor.nome}`;
}

obterLivroComAutorAsync(1).then((resultado) => {
	console.log("Exercício 1 (Async):", resultado);
});

// ========================================
// EXERCÍCIO DE FIXAÇÃO 2: Validar email e enviar confirmação
// ========================================
// Reescreva as funções abaixo usando async/await

function validarEmailPromise(email) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email.includes("@")) {
				resolve({ email, valido: true });
			} else {
				reject(new Error("Email inválido"));
			}
		}, 150);
	});
}

function enviarConfirmacaoPromise(email) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`Email de confirmação enviado para ${email}`);
		}, 200);
	});
}

function registrarUsuarioPromise(email) {
	return validarEmailPromise(email).then((resultado) => {
		return enviarConfirmacaoPromise(resultado.email).then((mensagem) => {
			return mensagem;
		});
	}).catch((erro) => {
		return `Erro: ${erro.message}`;
	});
}

registrarUsuarioPromise("usuario@gmail.com").then((resultado) => {
	console.log("Exercício 2 (Promise):", resultado);
});

// Reescreva daqui para baixo com async/await:
async function validarEmailAsync(email) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email.includes("@")) {
				resolve({ email, valido: true });
			} else {
				reject(new Error("Email inválido"));
			}
		}, 150);
	});
}

async function enviarConfirmacaoAsync(email) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`Email de confirmação enviado para ${email}`);
		}, 200);
	});
}

async function registrarUsuarioAsync(email) {
	try{
		const resultado = await validarEmailAsync(email);
		const  mensagem = await enviarConfirmacaoAsync(resultado.email);
		return mensagem;
	} catch(erro){
		return `Erro: ${erro.message}`;
	}
}

registrarUsuarioAsync("usuario@gmail.com").then((resultado) => {
	console.log("Exercício 2 (Async):", resultado);
});

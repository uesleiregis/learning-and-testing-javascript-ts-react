

// Criando uma promise simples e executando.
function fazerAlgo(){
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                // Outras coisas para fazer antes de completar a Promise
                console.log("Fazer alguma coisa.");
                resolve("https://exemplo.com");
            }, 2000);
        }
    );
}

fazerAlgo();

// ENCADEAMENTO DE PROMISES.

function buscarProduto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Notebook");
        }, 1000);
    });
}

function adicionarAoCarrinho(produto) {
    return `Produto ${produto} adicionado ao carrinho`;
}

function finalizarCompra(mensagem) {
    return `${mensagem} e compra finalizada`;
}

buscarProduto()
    .then((produto) => adicionarAoCarrinho(produto))
    .then((resultado) => finalizarCompra(resultado))
    .then((mensagemFinal) => {
        console.log(mensagemFinal);
    })
    .catch((erro) => {
        console.log("Erro na cadeia de promises:", erro);
    });

/*
Uma promise pode devolver um valor simples ou outra promise.
// Se for uma Promise, vai esperar ser reosolvida.
O importante é retornar o resultado em cada etapa do encadeamento.
Se algo der errado, o catch trata o problema no fim da cadeia.
*/

// EXERCICIO PARA VOCE RESOLVER
// Crie um fluxo de promises com 3 etapas:
// 1. Simular a busca de um usuário por id e retornar um nome.
// 2. Usar esse nome para simular a busca do saldo da conta.
// 3. Mostrar no console uma frase final com o nome do usuario e o saldo.
//
// Regras:
// - Use new Promise() em pelo menos uma etapa.
// - Encadeie com then.
// - Inclua catch para tratar erro.
// - Não use async/await.
//
// Dica:
// Pense em uma história simples, como "usuario encontrado -> saldo encontrado -> mensagem final".

const usuarios = [
    {
        id: 2,
        nome: "Maria Costa",
        saldo: 200
    },
    {
        id: 4,
        nome: "João Albino",
        saldo: 300
    }
]

function buscarUsuario(users, idUsuario){
    return new Promise(
        (resolve, reject) => {
            let user = users.find((usuario) => usuario.id === idUsuario);
            if(user)
            {
                console.log("Iniciando busca");
                resolve(user);
            }
            else
                reject("Usuario não encontrado"); 
        }
    );
}

function buscarSaldo(usuario)
{
    return {
        usuario,
        saldo: usuario.saldo
    };
}

function finalMessage(info)
{
    const mensagem = `O saldo do usuario ${info.usuario.nome} é ${info.saldo.toFixed(2)}`;
    console.log(mensagem);
    return mensagem;
}

buscarUsuario(usuarios, 4)
    .then((usuario) => buscarSaldo(usuario))
    .then((info) => finalMessage(info))
    .catch((e) => {
        console.log(e);
    })

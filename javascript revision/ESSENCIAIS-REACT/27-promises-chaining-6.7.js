// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 27
// Exercício original: 06-assincronismo/exercicio-06-07.js

// Exercício 6.7 - Chaining de Promises
// Refatore o exercício 6.3 (callback hell) usando Promises encadeadas.
// ========================================
// O PROBLEMA: CALLBACK HELL (Pirâmide da Perdição)
// ========================================

// Imagine este cenário: processar um pedido com múltiplas etapas:
// 1. Buscar dados do usuário (1 segundo)
// 2. Validar pagamento (1 segundo)
// 3. Processar envio (1 segundo)
// 4. Enviar confirmação (1 segundo)

// ❌ Com callbacks aninhados (callback hell):

console.log("===== CALLBACK HELL (❌ Difícil de ler) =====");

function processarPedidoComCallbacks() {
    buscarUsuarioCallback(function(usuário) {
        console.log("1. Usuário encontrado:", usuário.nome);
        
        validarPagamentoCallback(usuário.id, function(pagamento) {
            console.log("2. Pagamento validado:", pagamento.status);
            
            processarEnvioCallback(usuário.id, function(envio) {
                console.log("3. Envio processado:", envio.rastreio);
                
                enviarConfirmacaoCallback(usuário.email, function(email) {
                    console.log("4. Confirmação enviada para:", email);
                });
            });
        });
    });
}

// Funções de callback simuladas
function buscarUsuarioCallback(callback) {
    setTimeout(() => {
        callback({ id: 123, nome: "João", email: "joao@email.com" });
    }, 1000);
}

function validarPagamentoCallback(userId, callback) {
    setTimeout(() => {
        callback({ status: "Aprovado", valor: 150.00 });
    }, 1000);
}

function processarEnvioCallback(userId, callback) {
    setTimeout(() => {
        callback({ rastreio: "BR123456789" });
    }, 1000);
}

function enviarConfirmacaoCallback(email, callback) {
    setTimeout(() => {
        callback(email);
    }, 1000);
}

processarPedidoComCallbacks();

console.log("\n===== PROMISE CHAINING (✅ Muito mais limpo!) =====");

// ✅ Com Promises encadeadas (muito mais legível):

function buscarUsuarioPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 123, nome: "João", email: "joao@email.com" });
        }, 1000);
    });
}

function validarPagamentoPromise(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ status: "Aprovado", valor: 150.00 });
        }, 1000);
    });
}

function processarEnvioPromise(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ rastreio: "BR123456789" });
        }, 1000);
    });
}

function enviarConfirmacaoPromise(email) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(email);
        }, 1000);
    });
}

buscarUsuarioPromise()
    .then(usuário => {
        console.log("1. Usuário encontrado:", usuário.nome);
        return validarPagamentoPromise(usuário.id);
    })
    .then(pagamento => {
        console.log("2. Pagamento validado:", pagamento.status);
        return processarEnvioPromise(123);
    })
    .then(envio => {
        console.log("3. Envio processado:", envio.rastreio);
        return enviarConfirmacaoPromise("joao@email.com");
    })
    .then(email => {
        console.log("4. Confirmação enviada para:", email);
    })
    .catch(erro => {
        console.log("❌ Erro no processo:", erro);
    });

console.log("⏳ Processando pedido...\n");

// ========================================
// EXERCÍCIO: Refatore usando Promise Chaining
// ========================================
// Crie um sistema de login com as etapas:
// 1. Verificar credenciais do usuário
// 2. Buscar dados do usuário do banco de dados
// 3. Carregar preferências do usuário
// 4. Mostrar mensagem de boas-vindas
//
// Cada etapa demora 1 segundo.
// Cada função deve retornar uma Promise.
// Use .then() encadeado para passar dados entre as etapas.
//
// RESULTADO ESPERADO:
// "Credenciais validadas"
// "Dados do usuário: Maria Silva"
// "Preferências carregadas: Theme escuro"
// "Bem-vindo, Maria Silva! Você está logado."
//
// Escreva sua solução abaixo:


//-----
// Testando Call Back - Prática Deliberada

// função que recebe outra como callback
function executarTarefa(calback){
    setTimeout(()=>{
        console.log("Executando a tarefa");
        calback("Maria")
    },3000)
}

// função callback
const compraroPao = nome => console.log(nome + "conseguiu comprar o pão.")

// Chamando a função
executarTarefa(compraroPao)
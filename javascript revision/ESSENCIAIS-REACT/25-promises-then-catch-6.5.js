// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 25
// Exercício original: 06-assincronismo/exercicio-06-05.js

// Exercício 6.5 - Then e Catch
// Use `.then()` e `.catch()` para:
// - Tratar sucesso de uma Promise
// - Tratar erro de uma Promise
// - Encadear múltiplos `.then()`

// ========================================
// CONCEITO RÁPIDO
// ========================================
// .then() → Pega o resultado de uma Promise que DEU CERTO
// .catch() → Pega o erro de uma Promise que DEU ERRADO
// Encadeamento → Um .then() após o outro para fazer operações em sequência

// ========================================
// TAREFA 1: Promise de sucesso simples
// ========================================
// Crie uma Promise que busca um usuário e retorna: { nome: "Ana", idade: 25 }
// Use .then() para mostrar: "Usuário encontrado: Ana"
// Escreva aqui:
const usuario = new Promise((resolve, reject) => {
    const value = true;

    if (value)
        resolve({ nome: "Ana", idade: 25 })
    else
        reject("Usuário não encontrado")
});

usuario.then(result => {
    console.log(`Usuário encontrado: ${result.nome}`);
});


// ========================================
// TAREFA 2: Promise de erro simples
// ========================================
// Crie uma Promise que tenta fazer login mas falha
// Rejeite com: "Credenciais inválidas"
// Use .catch() para mostrar: "Erro no login: Credenciais inválidas"
// Escreva aqui:
const meuLogin = new Promise((res, rej) => {
    const statusLogin = false

    statusLogin
        ? res("Login com sucesso")
        : rej("Erro no login: credenciais inválidas")
});

meuLogin
    .then(res => {
        console.log(res);
    })
    .catch(res => {
        console.log(res.toUpperCase()); // o toUpperCase() foi só pra praticar.
    });
// ========================================
// TAREFA 3: Promise com .then() E .catch()
// ========================================
// Crie uma Promise que verifica se um produto está disponível
// Se Math.random() > 0.5 → resolve("Produto disponível")
// Senão → reject("Produto indisponível")
// Use .then() para sucesso e .catch() para erro
// Escreva aqui:

const DisponibilidadeProduto = new Promise((sucess, fail) => {
    console.log("\n|| Disponibilidade Produto ||");

    Math.random() > 0.5
        ? sucess("Produto disponível")
        : fail("Produto indisponível")
});

DisponibilidadeProduto
    .then(res => console.log(res))
    .catch(res => console.log(res))

// ========================================
// TAREFA 4: Encadear 2 .then()
// ========================================
// Crie uma Promise que retorna o número 10
// 1º .then() → multiplica por 2 e retorna
// 2º .then() → soma 5 e mostra o resultado (resultado final: 25)
// Escreva aqui:

const retorna10 = new Promise((res, rej) => {
    res(10)
})

retorna10.then(res => res * 2).then(res => {
    res += 5
    return `O valor agora é ${res}` // Modifiquei para praticar.
})
    .then(msg => console.log(msg))

// ========================================
// TAREFA 5: Encadear 3 .then() (pipeline de dados)
// ========================================
// Simule buscar um usuário, depois seus pedidos, depois calcular total
// Promise inicial retorna: { nome: "João", id: 1 }
// 1º .then() → retorna pedidos: [100, 200, 300]
// 2º .then() → calcula soma dos pedidos
// 3º .then() → mostra: "Total de João: R$ 600"
// Escreva aqui:

const buscarUsuario = new Promise((resolve, reject) => {
    const usuario = {
        nome: "João",
        id: 1,
        pedidos: [100, 200, 300],
        statusRequest: true
    }
    usuario.statusRequest
        ? resolve(usuario)
        : reject("Usuário não encontrado")
});

buscarUsuario
    .then(user => user.pedidos)
    .then(pedidos => {
        return pedidos
            .reduce((acc, item) => acc + item)
    })
    .then(total => {
        console.log(
            `Total de João: ${total}`)
    })


    // OUTRA FORMA, passando o objeto
   /*
   buscarUsuario
  .then(usuario => {
    // retorna um objeto com usuário e pedidos
    return { usuario, pedidos: [100, 200, 300] };
  })
  .then(({ usuario, pedidos }) => {
    // retorna um objeto com usuário e total
    const total = pedidos.reduce((soma, v) => soma + v, 0);
    return { usuario, total };
  })
  .then(({ usuario, total }) => {
    // aqui você tem acesso ao nome do usuário!
    console.log(`Total de ${usuario.nome}: R$ ${total}`);
  });
   
   
   */ 

// ========================================
// 💡 DICA: Retornar no .then()
// ========================================
// Para encadear, você PRECISA retornar algo no .then():
//
// .then((valor) => {
//     const novo = valor * 2;
//     return novo;  ← SEM ISSO, o próximo .then() recebe undefined!
// })

// ========================================
// EXEMPLO COMPLETO: Busca de CEP simulada
// ========================================
const buscarCEP = new Promise((ok, erro) => {
    const cepValido = true;  // Mude para false para testar erro
    setTimeout(() => {
        if (cepValido) {
            ok({ cep: "12345-678", cidade: "São Paulo", rua: "Av. Paulista" });
        } else {
            erro("CEP não encontrado");
        }
    }, 1000);
});

buscarCEP
    .then((endereco) => {
        console.log("✅ CEP encontrado!");
        return endereco.cidade;  // Passa só a cidade para o próximo .then()
    })
    .then((cidade) => {
        console.log(`📍 Cidade: ${cidade}`);
        return cidade.toUpperCase();
    })
    .then((cidadeMaiuscula) => {
        console.log(`🔤 Em maiúsculas: ${cidadeMaiuscula}`);
    })
    .catch((erro) => {
        console.log(`❌ Erro: ${erro}`);
    });

console.log("⏳ Buscando CEP... (aguarde 1 segundo)");


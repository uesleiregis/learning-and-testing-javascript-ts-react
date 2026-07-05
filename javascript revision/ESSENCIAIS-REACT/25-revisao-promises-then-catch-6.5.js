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
const buscarUsuario = new Promise((sucess) => {
    console.log("Iniciar busca do usuário");

    let usuario = {
        nome: "Ana",
        idade: 25
    }
    setTimeout(() => {
        sucess(usuario);
    }, 3000);
});

buscarUsuario
    .then(e => console.log(e));

// ========================================
// TAREFA 2: Promise de erro simples
// ========================================
// Crie uma Promise que tenta fazer login mas falha
// Rejeite com: "Credenciais inválidas"
// Use .catch() para mostrar: "Erro no login: Credenciais inválidas"
// Escreva aqui:

const login = (email, senha) => {
    return new Promise((succes, reject) => {
        setTimeout(() => {
            (email != "email@email.com" || senha !== Number(1234)) ?
                reject(new Error("Erro no login: Credenciais inválidas"))
                : succes("Seja bem vindo!")
        }, 1500);
    })
}

login("email@email.com", 1235) // Senha incorreta a propósito.
    .then((res) => { console.log(res) })
    .catch((e) => { console.log(e.message) })

// ========================================
// TAREFA 3: Promise com .then() E .catch()
// ========================================
// Crie uma Promise que verifica se um produto está disponível
// Se Math.random() > 0.5 → resolve("Produto disponível")
// Senão → reject("Produto indisponível")
// Use .then() para sucesso e .catch() para erro
// Escreva aqui:
const buscarProduto = new Promise((disponivel, indisponivel) => {
    const statusProduto = Math.random() > 0.5;

    setTimeout(() => {
        if (statusProduto)
            disponivel("Produto disponivel")
        else
            indisponivel("Produto indisponivel")
    }, 3000);

})

buscarProduto
    .then((res) => {
        console.log(res)
    })
    .catch((e) => { console.log(e) });


// ========================================
// TAREFA 4: Encadear 2 .then()
// ========================================
// Crie uma Promise que retorna o número 10
// 1º .then() → multiplica por 2 e retorna
// 2º .then() → soma 5 e mostra o resultado (resultado final: 25)
// Escreva aqui:

new Promise((res) => {
  res(10);
}).then((r) => r*2).then((r) => console.log(r + 5))

// ========================================
// TAREFA 5: Encadear 3 .then() (pipeline de dados)
// ========================================
// Simule buscar um usuário, depois seus pedidos, depois calcular total
// Promise inicial retorna: { nome: "João", id: 1 }
// 1º .then() → retorna pedidos: [100, 200, 300]
// 2º .then() → calcula soma dos pedidos
// 3º .then() → mostra: "Total de João: R$ 600"
// Escreva aqui:

const retornaPedidos = (idUsuario) => {
  return new Promise((res, rej) => {
    if(idUsuario === 1)
        res([100, 200, 300]);
    else
        rej(new Error("Pedido não encontrado"));
  })
}

const somarPedidos = (arr) => arr.reduce((acc, v) => acc + v);

new Promise((resolve, reject) => {
    console.log("Tarefa 5")
  const statusUsuario = true;

  if(statusUsuario)
    resolve({ nome: "João", id: 1 });
  else
    reject(new Error("Usuário não encontrado"));
}).then((res) => {
    return retornaPedidos(res.id)
        .then((pedidos) => ({ res, pedidos }));
}).then((r) => {
    const total = somarPedidos(r.pedidos);
    const nome = r.res.nome;
    console.log("Somando pedidos")
    return {total, nome};
}).then(e => console.log(`Usuário: ${e.nome} - Total da encomenda: € ${e.total}`))
    .catch(e => console.log(e.message));



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
    }, 2000);
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


/* 
Call Stack é um conjunto de estruturas de de filas, sao
 a Microtask Queue e a Task Queue gerenciados pelo Event Loop.
Tais struturas gerenciam a execução do código assíncrono.

 O Event LoopO Event Loop é o maestro desse sistema. 
 Ele fica monitorando continuamente a Call Stack e as filas. 
 O seu trabalho é simples:Ele verifica se a Call Stack está vazia.
 Se estiver vazia, ele verifica a Microtask Queue e passa todas as 
 tarefas de lá para a Call Stack, uma por uma, até a fila zerar.Quando 
 não há mais microtasks, ele verifica a Task Queue e passa a primeira 
 tarefa para a Call Stack.
*/

new Promise((res) => {
    console.log("Teste")
})


/* 
Ótimo exemplo para compreender o Event Lopp

Updated todo list

Ótima pergunta! Não é exatamente assim. A execução é **LINEAR**, não cascata, e há mais que 2 filas:

**As 3 filas principais:**

1. **Call Stack** (síncrono)
2. **Microtask Queue** (Promises, .then(), .catch(), queueMicrotask)
3. **Macrotask Queue** (setTimeout, setInterval, fetch)

**O ciclo é:**
```
1. Executa todo o Call Stack (síncrono)
2. Executa TODAS as Microtasks
3. Executa UMA Macrotask
4. Volta para passo 2 (Microtasks)
5. Próxima Macrotask
... (repete)
```

**Exemplo prático com setTimeout dentro de Promise dentro de setTimeout:**

```javascript
console.log('1');

new Promise((resolve) => {
    console.log('2');
    setTimeout(() => {
        console.log('3');
        setTimeout(() => {
            console.log('4');
            resolve();
        }, 0);
    }, 0);
}).then(() => console.log('5'));

console.log('6');
```

**Execução LINEAR:**
1. `'1'` - síncrono
2. `'2'` - síncrono (dentro Promise)
3. Agenda 1º setTimeout na **macrotask queue**
4. `'6'` - síncrono após Promise
5. Microtasks vazias (resolve não foi chamado ainda)
6. **Executa 1º setTimeout:** `'3'`
7. Agenda 2º setTimeout na **macrotask queue**
8. Microtasks vazias
9. **Executa 2º setTimeout:** `'4'` + chama `resolve()`
10. Microtasks executam: `'5'` (.then())

**Saída:**
```
1
2
6
3
4
5
```

**Não é cascata simultânea**, cada setTimeout é uma entrada separada na fila. Execute isso no navegador e veja! 🎯
*/

// ========================================
// 🔄 TAREFA 5 - TRADUÇÃO DE PROMISES PARA ASYNC/AWAIT
// ========================================
// COM PROMISES (.then()):

new Promise((resolve, reject) => {
    console.log("Tarefa 5")
    const statusUsuario = true;
    if(statusUsuario)
        resolve({ nome: "João", id: 1 });
    else
        reject(new Error("Usuário não encontrado"));
}).then((res) => {
    return retornaPedidos(res.id)
        .then((pedidos) => ({ res, pedidos }));
}).then((r) => {
    const total = somarPedidos(r.pedidos);
    const nome = r.res.nome;
    console.log("Somando pedidos")
    return {total, nome};
}).then(e => console.log(`Usuário: ${e.nome} - Total da encomenda: € ${e.total}`))
    .catch(e => console.log(e.message));


// COM ASYNC/AWAIT (MAIS LIMPO):

async function executarTarefa5() {
    try {
        console.log("Tarefa 5")
        const statusUsuario = true;
        
        if(!statusUsuario)
            throw new Error("Usuário não encontrado");
        
        const usuario = { nome: "João", id: 1 };
        
        // Busca os pedidos
        const pedidos = await retornaPedidos(usuario.id);
        
        // Soma os pedidos
        const total = somarPedidos(pedidos);
        
        console.log("Somando pedidos")
        
        // Exibe resultado final
        console.log(`Usuário: ${usuario.nome} - Total da encomenda: € ${total}`);
        
    } catch(e) {
        console.log(e.message);
    }
}

executarTarefa5();


// DIFERENÇAS PRINCIPAIS:
// 1. Promises: Encadeia com .then() e .catch()
// 2. Async/await: Usa await para "aguardar" e try/catch para erros
// 3. Async/await é MAIS LEGÍVEL (lê como código síncrono)
// 4. Ambas fazem a mesma coisa, mas async/await é preferido em código moderno!
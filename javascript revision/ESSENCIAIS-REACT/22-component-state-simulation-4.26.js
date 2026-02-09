// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 22
// Exercício original: 04-objetos/exercicio-04-26.js

// Exercício 4.26 - Estado de Componente Simulado (Imutabilidade)
// Este é o conceito MAIS IMPORTANTE do React!
// Você precisa DOMINAR isso antes de usar useState/useReducer.
//
// REGRA DE OURO: NUNCA modifique o estado diretamente!
// Sempre crie uma CÓPIA nova com as alterações.

// ========================================
// 🎯 CONCEITO BASE: Mutação vs Imutabilidade
// ========================================

// ❌ MUTAÇÃO (ERRADO - React não detecta!)
const usuario1 = { nome: "Ana", idade: 25 };
usuario1.idade = 26;  // Modificou o objeto original
console.log("Mutação:", usuario1);  // { nome: "Ana", idade: 26 }

// ✅ IMUTABILIDADE (CORRETO - React detecta!)
const usuario2 = { nome: "Bruno", idade: 30 };
const novoUsuario2 = { ...usuario2, idade: 31 };  // Criou objeto novo
console.log("Original:", usuario2);    // { nome: "Bruno", idade: 30 } - Não mudou!
console.log("Novo:", novoUsuario2);    // { nome: "Bruno", idade: 31 } - Novo objeto!




// ========================================
// 🎯 CENÁRIO 1: Atualizar Propriedades Simples
// ========================================
const estadoInicial = {
    nome: "Carlos",
    email: "carlos@email.com",
    idade: 28,
    ativo: true
};

console.log("\n=== CENÁRIO 1: Propriedades Simples ===");

// Exemplo 1: Atualizar uma propriedade
const estado1 = { ...estadoInicial, idade: 29 };
console.log("Atualizou idade:", estado1);

// Exemplo 2: Atualizar múltiplas propriedades
const estado2 = { ...estadoInicial, idade: 29, ativo: false };
console.log("Atualizou idade e ativo:", estado2);

// Exemplo 3: Adicionar nova propriedade
const estado3 = { ...estadoInicial, telefone: "(11) 99999-9999" };
console.log("Adicionou telefone:", estado3);

// 💡 PADRÃO: { ...objetoAntigo, propriedade: novoValor }




// ========================================
// 🎯 CENÁRIO 2: Atualizar Arrays - Adicionar Item
// ========================================
const estadoTarefas = {
    usuario: "Diana",
    tarefas: [
        { id: 1, texto: "Estudar React", concluida: false },
        { id: 2, texto: "Fazer exercícios", concluida: true }
    ]
};

console.log("\n=== CENÁRIO 2: Arrays - Adicionar ===");

// ❌ ERRADO - Mutação
// estadoTarefas.tarefas.push({ id: 3, texto: "Nova tarefa" });  // NÃO FAÇA ISSO!

console.log("Praticando Cenário 2");

let novaTarefa_ = {id: 3, texto: "Almoçar em família", concluida: false}
const novoEstadoTarefas = {
    ...estadoTarefas,
    tarefas: [
        ...estadoTarefas.tarefas,
        novaTarefa_
    ]
}

console.log(novoEstadoTarefas);









// ✅ CORRETO - Imutável (spread no array)
const novaTarefa = { id: 3, texto: "Revisar código", concluida: false };
const estadoComNovaTarefa = {
    ...estadoTarefas,
    tarefas: [...estadoTarefas.tarefas, novaTarefa]  // Cria array novo
};
console.log("Original:", estadoTarefas.tarefas.length, "tarefas");
console.log("Novo:", estadoComNovaTarefa.tarefas.length, "tarefas");

// 💡 PADRÃO ADICIONAR: tarefas: [...arrayAntigo, novoItem]




// ========================================
// 🎯 CENÁRIO 3: Atualizar Arrays - Remover Item
// ========================================
console.log("\n=== CENÁRIO 3: Arrays - Remover ===");

const estadoCarrinho = {
    usuario: "Eduardo",
    itens: [
        { id: 1, produto: "Notebook", preco: 3000 },
        { id: 2, produto: "Mouse", preco: 50 },
        { id: 3, produto: "Teclado", preco: 200 }
    ]
};

// ❌ ERRADO - Mutação
// estadoCarrinho.itens.splice(1, 1);  // NÃO FAÇA ISSO!

const idRemover = 1
const novoEstadoCarrinho = {
    ...estadoCarrinho,
    itens: estadoCarrinho.itens.filter(e => e.id != 3)
}

console.log("PRATITANDO CENÁRIO 3")
console.log(novoEstadoCarrinho);


// ✅ CORRETO - Remover item com id 2
const idParaRemover = 2;
const estadoSemItem = {
    ...estadoCarrinho,
    itens: estadoCarrinho.itens.filter(item => item.id !== idParaRemover)
};
console.log("Original:", estadoCarrinho.itens.length, "itens");
console.log("Novo:", estadoSemItem.itens.length, "itens");

// 💡 PADRÃO REMOVER: itens: arrayAntigo.filter(item => item.id !== idRemover)




// ========================================
// 🎯 CENÁRIO 4: Atualizar Arrays - Modificar Item
// ========================================
console.log("\n=== CENÁRIO 4: Arrays - Modificar ===");

const estadoProdutos = {
    loja: "TechStore",
    produtos: [
        { id: 1, nome: "Celular", estoque: 10 },
        { id: 2, nome: "Tablet", estoque: 5 },
        { id: 3, nome: "Laptop", estoque: 3 }
    ]
};

// ❌ ERRADO - Mutação
// estadoProdutos.produtos[1].estoque = 8;  // NÃO FAÇA ISSO!

// ✅ CORRETO - Modificar produto com id 2
const idParaModificar = 2;
const estadoProdutosAtualizado = {
    ...estadoProdutos,
    produtos: estadoProdutos.produtos.map(produto =>
        produto.id === idParaModificar
            ? { ...produto, estoque: 8 }  // Modifica este
            : produto                      // Mantém os outros
    )
};
console.log("Original:", estadoProdutos.produtos[1]);
console.log("Novo:", estadoProdutosAtualizado.produtos[1]);

// 💡 PADRÃO MODIFICAR: 
// itens: arrayAntigo.map(item => 
//     item.id === idModificar ? { ...item, propriedade: novoValor } : item
// )




// ========================================
// 🎯 CENÁRIO 5: Objetos Aninhados
// ========================================
console.log("\n=== CENÁRIO 5: Objetos Aninhados ===");

const estadoUsuario = {
    nome: "Fernanda",
    perfil: {
        bio: "Desenvolvedora Frontend",
        avatar: "avatar1.jpg",
        preferencias: {
            tema: "escuro",
            notificacoes: true
        }
    }
};

// ❌ ERRADO - Mutação
// estadoUsuario.perfil.preferencias.tema = "claro";  // NÃO FAÇA ISSO!

// Praticando
/* const novoEstado = {
    ...estadoUsuario,
    perfil: {
        ...estadoUsuario.perfil, 
        preferencias: {
            ...estadoUsuario.perfil.preferencias,
            tema: "claro"
        }
    }
} */


// ✅ CORRETO - Atualizar objeto aninhado (3 níveis!)
const estadoUsuarioAtualizado = {
    ...estadoUsuario,
    perfil: {
        ...estadoUsuario.perfil,
        preferencias: {
            ...estadoUsuario.perfil.preferencias,
            tema: "claro"
        }
    }
};
console.log("Original:", estadoUsuario.perfil.preferencias.tema);
console.log("Novo:", estadoUsuarioAtualizado.perfil.preferencias.tema);

// 💡 PADRÃO ANINHADO: Copie cada nível com spread até chegar na propriedade




// ========================================
// 🎯 PRÁTICA: Agora é sua vez!
// ========================================
console.log("\n=== PRÁTICA ===");

const estadoApp = {
    usuario: "Gabriel",
    configuracoes: {
        tema: "escuro",
        idioma: "pt-BR"
    },
    notificacoes: [
        { id: 1, mensagem: "Bem-vindo!", lida: true },
        { id: 2, mensagem: "Nova atualização", lida: false },
        { id: 3, mensagem: "Tarefa concluída", lida: false }
    ],
    contador: 0
};

// TAREFA 1: Incremente o contador de 0 para 1 (imutável)
// Escreva aqui:

const novoEstadoApp = {...estadoApp, contador: 1}
console.log("Atividade 1: \n", novoEstadoApp);

// TAREFA 2: Adicione uma nova notificação ao array
// Nova notificação: { id: 4, mensagem: "Novo comentário", lida: false }
// Escreva aqui:
const novaNotificacao = {id: 4, mensagem: "Novo comentário", lida: false}
const novoEstadoApp2 = {
    ...estadoApp, notificacoes: [...estadoApp.notificacoes, novaNotificacao]
}
console.log("Atividade 2: \n", novoEstadoApp2)


// TAREFA 3: Marque a notificação com id 2 como lida (lida: true)
// Escreva aqui:

const finishTask = 3
const novoEstadoApp3 = {
    ...estadoApp, notificacoes: estadoApp.notificacoes.map( task => 
        task.id === finishTask 
        ? {...task, lida: true}
        : task 
    )
}

console.log("Atividade 3: \n", novoEstadoApp3)

// TAREFA 4: Remova a notificação com id 1
// Escreva aqui:
const taskToRemove = 1
const novoEstadoApp4 = {...estadoApp, notificacoes: 
    estadoApp.notificacoes.filter( task => task.id !== taskToRemove)
}

console.log("Atividade 4: \n", novoEstadoApp4);

// TAREFA 5: Mude o tema nas configurações para "claro"
// Escreva aqui:

const novoEstadoApp5 = {
    ...estadoApp, configuracoes : {...estadoApp.configuracoes, tema: "claro"}
}

console.log("Atividade 5: \n:", novoEstadoApp5);

// TAREFA 6: Adicione uma nova configuração "fontSize: 16"
// Escreva aqui:
const novoEstadoApp6 = {
    ...estadoApp, configuracoes : {...estadoApp.configuracoes, fontSize: 16}
}

console.log("Atividade 6: \n:", novoEstadoApp6);



// ========================================
// 📚 RESUMO RÁPIDO
// ========================================

/*
┌──────── PADRÕES DE IMUTABILIDADE ────────┐
│                                           │
│ OBJETO SIMPLES:                           │
│ { ...obj, propriedade: novoValor }        │
│                                           │
│ ADICIONAR NO ARRAY:                       │
│ [...array, novoItem]                      │
│                                           │
│ REMOVER DO ARRAY:                         │
│ array.filter(item => item.id !== idRem)   │
│                                           │
│ MODIFICAR NO ARRAY:                       │
│ array.map(item =>                         │
│   item.id === idMod                       │
│     ? { ...item, prop: novoVal }          │
│     : item                                │
│ )                                         │
│                                           │
│ OBJETO ANINHADO:                          │
│ {                                         │
│   ...obj,                                 │
│   nivel1: {                               │
│     ...obj.nivel1,                        │
│     nivel2: { ...obj.nivel1.nivel2, ... } │
│   }                                       │
│ }                                         │
│                                           │
└───────────────────────────────────────────┘

❗ LEMBRE-SE:
• NUNCA use push, splice, pop (mutam array)
• NUNCA modifique propriedade diretamente
• SEMPRE use spread (...) para copiar
• Use map para modificar
• Use filter para remover
• [...array, item] para adicionar

FERRAMENTAS PROIBIDAS (mutam):
❌ push()
❌ pop()
❌ splice()
❌ sort() (sem retornar novo)
❌ reverse() (sem retornar novo)
❌ obj.prop = valor

FERRAMENTAS PERMITIDAS (imutáveis):
✅ spread (...)
✅ map()
✅ filter()
✅ concat()
✅ slice()
✅ Object.assign() (menos comum)
*/

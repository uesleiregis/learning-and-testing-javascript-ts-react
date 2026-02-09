// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 21
// Exercício original: 05-es6-features/exercicio-05-32.js

// Exercício 5.32 - Nullish Coalescing (Avançado)
// Use `??` para:
// - Fornecer valores padrão
// - Comparar com `||`
// - Combinar com optional chaining

// ========================================
// 🎯 CENÁRIO 1: Configurações de Usuário (muito comum!)
// ========================================
const usuario = {
    nome: "Ana",
    idade: 0,              // ⚠️ Valor válido, mas falsy!
    salario: null,         // ❌ Dados não preenchidos
    tema: undefined,       // ❌ Preferência não definida
    notificacoes: false    // ⚠️ Valor válido, mas falsy!
};

console.log("=== CENÁRIO 1: Configurações ===");
// ❌ ERRADO - Usando || 
console.log("Idade (||):", usuario.idade || 18);        // 18 (PERDEU O 0!)
console.log("Tema (||):", usuario.tema || "claro");     // "claro" (perde undefined)
console.log("Notificações (||):", usuario.notificacoes || true);  // true (MUDA FALSE!)

// ✅ CORRETO - Usando ??
console.log("Idade (??):", usuario.idade ?? 18);        // 0 (preservou!)
console.log("Tema (??):", usuario.tema ?? "claro");     // "claro" (só trata undefined)
console.log("Notificações (??):", usuario.notificacoes ?? true); // false (preservou!)

// 💡 Por que importa?
// Se o usuário tem idade 0 ou desativou notificações, || vai sobrescrever!
// ?? respeita esses valores válidos.




// ========================================
// 🎯 CENÁRIO 2: Resposta de API com campos opcionais
// ========================================
const resposta = {
    status: 200,
    dados: {
        usuario: {
            id: 1,
            nome: "Bruno",
            email: "bruno@email.com",
            telefone: null,        // Campo não preenchido
            sobrenome: undefined   // Campo não retornou
        }
    },
    // mensagemErro não existe
};

console.log("\n=== CENÁRIO 2: Resposta de API ===");
// TAREFA 1: Acessar email com segurança e padrão
console.log("Email:", resposta.dados.usuario?.email ?? "sem-email@app.com");

// TAREFA 2: Acessar telefone (não existe) com padrão
console.log("Telefone:", resposta.dados.usuario?.telefone ?? "(99) 99999-9999");

// TAREFA 3: Acessar sobrenome (undefined) com padrão
console.log("Sobrenome:", resposta.dados.usuario?.sobrenome ?? "Não informado");

// TAREFA 4: Acessar mensagem de erro (não existe) com padrão
console.log("Erro:", resposta?.mensagemErro ?? "Operação realizada com sucesso");

// 💡 Padrão: propriedade?.subePropriedade ?? "valor padrão"




// ========================================
// 🎯 CENÁRIO 3: Sistema de Descontos (muito importante!)
// ========================================
const cliente = {
    nome: "Carlos",
    desconto: 0,           // ⚠️ Cliente SEM desconto (0 é válido!)
    cupomAdicional: null   // ❌ Não tem cupom extra
};

console.log("\n=== CENÁRIO 3: Cálculos Precisos ===");
// ❌ ERRADO - Pode destruir cálculos
const descontoErrado = cliente.desconto || 10;  // 10 (PERDEU O 0!)
console.log("Desconto (||):", descontoErrado, "% - ERRADO!");

// ✅ CORRETO - Preserva 0
const descontoCorreto = cliente.desconto ?? 10;  // 0 (preservou!)
console.log("Desconto (??):", descontoCorreto, "% - CORRETO!");

// Aplicando cupom adicional
const cupomFinal = cliente.cupomAdicional ?? 5;  // 5 (usa padrão)
console.log("Cupom Adicional:", cupomFinal, "%");

// Cálculo final
const precoOriginal = 100;
const desconto = (precoOriginal * (descontoCorreto + cupomFinal)) / 100;
console.log(`Preço final: R$ ${(precoOriginal - desconto).toFixed(2)}`);




// ========================================
// 🎯 CENÁRIO 4: Encadeamento com ?? (Pipeline) ❤️❤️
// ========================================
const config = {
    user: {
        // preferencias não existe
    },
    // sistema não existe
};

console.log("\n=== CENÁRIO 4: Encadeamento ===");
// Pegando valor de múltiplas fontes com prioridade
const linguagem = 
    config?.user?.preferencias?.linguagem ??  // Tenta preferência do usuário
    localStorage?.getItem?.("lang") ??        // Depois tenta localStorage
    "pt-BR";                                  // Por último, padrão

console.log("Linguagem definida:", linguagem);

// 💡 PADRÃO DE 3 NÍVEIS:
// 1º - Preferência do usuário
// 2º - LocalStorage
// 3º - Valor padrão da app




// ========================================
// 🎯 CENÁRIO 5: Evitando Armadilhas (MUITO IMPORTANTE!)
// ========================================
const dados = {
    quantidade: 0,
    ativo: false,
    nome: "",
    tags: []
};

console.log("\n=== CENÁRIO 5: Armadilhas Comuns ===");

// ❌ ARMADILHA 1: Confundir "" com null
console.log('String vazia com ||:', "" || "padrão");    // "padrão" (perde "")
console.log('String vazia com ??:', "" ?? "padrão");    // "" (preserva!)

// ❌ ARMADILHA 2: Esquecer que 0 é válido
console.log('Quantidade com ||:', dados.quantidade || 10);  // 10 (ERRADO!)
console.log('Quantidade com ??:', dados.quantidade ?? 10);  // 0 (CORRETO!)

// ❌ ARMADILHA 3: Booleano false é válido
console.log('Ativo com ||:', dados.ativo || true);         // true (PERDEU FALSE!)
console.log('Ativo com ??:', dados.ativo ?? true);         // false (PRESERVOU!)

// ❌ ARMADILHA 4: Array vazio [] não é null
console.log('Tags com ||:', dados.tags || ["padrão"]);     // ["padrão"] (PERDE [])
console.log('Tags com ??:', dados.tags ?? ["padrão"]);     // [] (PRESERVA!)




// ========================================
// 🎯 DESAFIO: Formulário Reativo (Simulação React)
// ========================================
const formulario = {
    campos: {
        nome: "",           // Usuário deixou vazio
        email: null,        // Nunca preencheu
        idade: 0,           // Digitou 0 (bebê?)
        termos: false,      // Não aceitou
        pais: undefined     // Campo não renderizado
    }
};

console.log("\n=== DESAFIO: Validação de Formulário ===");
// TAREFA: Complete com ?? para fornecer valores padrão apropriados
// Sem perder dados válidos!

// Escreva aqui:
// 1. Nome (se vazio, usar "Usuário Anônimo")
console.log(formulario.campos?.nome || "Usuário Anônimo");

// 2. Email (se null, usar "nao-informado@app.com")
console.log(formulario.campos?.email ?? "Não informado");

// 3. Idade (se 0 ou undefined, usar 18)
console.log(formulario.campos?.idade || 18);

// 4. Termos (se false, usar true como padrão para aceitar)
console.log(formulario.campos?.termos || true);

// 5. País (se undefined, usar "Brasil")
console.log(formulario?.pais ?? "Brasil");

// ========================================
// 📚 RESUMO: Quando usar cada operador
// ========================================

/*
┌─────────── QUANDO USAR || vs ?? ───────────┐
│                                             │
│ Use ||  quando:                             │
│ • Quer SUBSTITUIR todos os valores falsy    │
│   (0, "", false, null, undefined, NaN)      │
│ • Quer "limpar" campos vazios               │
│ • Exemplo: nome || "Anônimo"                │
│                                             │
│ Use ??  quando:                             │
│ • SUBSTITUIR apenas null/undefined          │
│ • Preservar 0, false, "", [] como válidos   │
│ • Trabalhando com números (preço, idade)    │
│ • Booleanos são dados reais (toggles)       │
│ • APIs retornam 0 como valor legítimo       │
│                                             │
│ REGRA DE OURO:                              │
│ ?? é mais seguro na maioria dos casos!      │
│ Use || apenas quando QUER perder falsy      │
│                                             │
└─────────────────────────────────────────────┘

COMPARAÇÃO RÁPIDA:
0 || 10          → 10    (substitui 0)
0 ?? 10          → 0     (preserva 0)

"" || "texto"    → "texto" (substitui "")
"" ?? "texto"    → ""      (preserva "")

false || true    → true    (substitui false)
false ?? true    → false   (preserva false)

null || "padrão" → "padrão" (substitui null)
null ?? "padrão" → "padrão" (substitui null)

ONDE VOCÊ VÊ ISSO EM REACT:
✅ Componentes recebem props com valores 0
✅ Estados iniciais com false são válidos
✅ APIs retornam preço: 0 (produto grátis!)
✅ Contadores podem começar em 0
✅ Flags desativadas (false) são importantes
*/

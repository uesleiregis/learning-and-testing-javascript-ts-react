// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 21
// Exercício original: 05-es6-features/exercicio-05-32.js

// Exercício 5.32 - Nullish Coalescing (Avançado)
// Use `??` para:
// - Fornecer valores padrão
// - Comparar com `||`
// - Combinar com optional chaining


// ?? -> se o valor da esquerda for null ou undefined retorna o valor da direita.
// || -> se o valor da esquerda for falsy, retorna o valor da direita.
// Valores falsy: 0, "", false, NaN, undefined


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
// Exercício: comparar `||` vs `??` (passo a passo)
// Objetivo: entender quando `||` vai sobrescrever valores válidos (0, false, "")
// e quando `??` preserva esses valores, tratando apenas `null`/`undefined`.
//
// Passos (faça você mesmo):
// 1) Escreva (ou descomente) os `console.log` abaixo para testar `||` e observar o
//    comportamento quando o campo tem valores "falsy" válidos.
// 2) Escreva (ou descomente) os `console.log` correspondentes usando `??` e compare
//    os resultados — veja o que foi preservado.
// 3) Explique para si mesmo por que cada operador produziu o resultado observado.
//
// Sugestões de expressões para adicionar (copie e cole, depois execute o arquivo):
console.log("Idade (||):", usuario.idade || 18); // 0 é falsy - saída 18
console.log("Idade (??):", usuario.idade ?? 18); // 0 não é undefined nem null - saída 0;
//
console.log("Tema (||):", usuario.tema || "claro"); // undefined é falsy - saída claro
console.log("Tema (??):", usuario.tema ?? "claro"); // saída claro.
//
console.log("Notificações (||):", usuario.notificacoes || true); // false é falsy - true
console.log("Notificações (??):", usuario.notificacoes ?? true); // false -> false
//
// Dica: rode este arquivo com `node` e observe as diferenças — não revelei os
// resultados aqui para que você possa praticar a execução e a análise.


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
// TAREFAS:
// 1) Acessar `email` com segurança e padrão
console.log(resposta.dados?.usuario?.email ?? "Esse não é um formato válido")
// 2) Acessar `telefone` com padrão
console.log(resposta.dados?.usuario?.telefone ?? "(99) 99999-9999")
// 3) Acessar `sobrenome` com padrão
console.log(resposta.dados?.usuario?.sobrenome ?? "Nome Inválido")
// 4) Acessar `mensagemErro` com padrão
console.log(resposta?.mensagemErro || "Mensagem aqui.")
// Respostas removidas para você praticar.

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
// Exercício: Refaça os cálculos preservando valores válidos (0) e usando `??`.
// Removi as respostas para permitir a prática.
const precoOriginal = 100; // Você pode usar este valor no seu cálculo
// Aplicando desconto caso não haja desconto atribuido. (seja undefined)
const descontoCorreto = cliente.desconto ?? 10;
// Aplicar cupom adicional casa não haja nenhum configurado.
cliente.cupomAdicional = cliente.cupomAdicional ?? 5;

// Calculo do desconto final
const descontoFinal = precoOriginal * (descontoCorreto + cliente.cupomAdicional)/precoOriginal

// Calculo preço final
const precoFinal = precoOriginal - descontoFinal

console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`)

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
// TODO: Defina `linguagem` tentando (1) preferência do usuário, (2) localStorage, (3) padrão "pt-BR".
let linguagem; // resposta removida para prática

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
// Exercício: reimplemente os exemplos para ver a diferença entre `||` e `??`.
// Respostas removidas para prática.




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
// 1) Nome: (resposta removida)
// 2) Email: (resposta removida)
// 3) Idade: (resposta removida)
// 4) Termos: (resposta removida)
// 5) País: (resposta removida)
// Preencha os `console.log` ou crie asserts para validar suas respostas.

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

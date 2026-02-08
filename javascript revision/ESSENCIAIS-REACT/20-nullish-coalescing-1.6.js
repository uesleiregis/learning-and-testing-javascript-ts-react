// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 20
// Exercício original: 01-fundamentos/exercicio-01-06.js

// Exercício 1.6 - Nullish Coalescing
// Crie variáveis com diferentes valores e teste com ambos operadores:
// const valor1 = 0 || "padrão";        // ?
// const valor2 = 0 ?? "padrão";        // ?
// const valor3 = "" || "padrão";      // ?
// const valor4 = "" ?? "padrão";      // ?
// const valor5 = false || "padrão";   // ?
// const valor6 = false ?? "padrão";   // ?
// const valor7 = null || "padrão";    // ?
// const valor8 = null ?? "padrão";    // ?
//
// Anote os resultados e identifique quando `??` é mais apropriado que `||`.

const v1 = 0 || 10 // 10 - trata o 0
const v2 = 0 ?? 10 // 0 - não trata o zero
const v3 = "" || "Brasil" // Brasil - trata
const v4 = "" ?? "Brasil" // "" - não trata
const v5 = false || "Jujú" // Jujú - trata
const v6 = false ?? "Jujú" // false - não trata
const v7 = null || "Misericórdia" //Misericórdia - trata
const v8 = null ?? "Misericórdia" //Misericórdia - TRATA
const v9 = undefined || "Agora vai" // Agora vai - trata
const v10 = undefined ?? "Agora foi" // Agora foi - TRATA

console.log(v1, v2);
console.log(v3, v4);
console.log(v5, v6);
console.log(v7, v8);
console.log(v9, v10);

// Use || quando quiser "limpar" valores falsy (0, "", false, null, undefined)
// Use ?? quando quiser SÓ null/undefined (preserva 0, "", false)

// Exemplo prático em React:
const preco = dadosProduto.preco ?? "Preço não disponível";  // ✅ Se for 0, mantém 0
const nome = usuario.nome || "Anônimo"; 
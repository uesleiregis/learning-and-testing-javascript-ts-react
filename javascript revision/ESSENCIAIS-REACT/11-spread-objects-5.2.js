// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 11
// Exercício original: 05-es6-features/exercicio-05-02.js

// Exercício 5.2 - Spread em Objetos
// Use spread operator para:
// - Mesclar objetos
// - Adicionar/sobrescrever propriedades
// - Criar objeto com propriedades condicionais

// Objetos de exemplo:

// 1. Objeto de configuração padrão
const configPadrao = {
    tema: "claro",
    idioma: "pt-BR",
    tamanhoFonte: 14
};

// 2. Objeto com preferências do usuário
const preferenciasUsuario = {
    tema: "escuro",
    notificacoes: true
};

// 3. Objeto de dados de produto
const produto = {
    id: 101,
    nome: "Notebook",
    preco: 2500
};

// 4. Objeto de desconto
const desconto = {
    percentual: 10,
    ativo: true
};

// TAREFA 1: Mesclar dois objetos (spread combina propriedades)
// Mescle configPadrao com preferenciasUsuario
// Resultado esperado: { tema: "escuro", idioma: "pt-BR", tamanhoFonte: 14, notificacoes: true }
// Nota: Se houver propriedades com mesmo nome, a última sobrescreve a primeira

const configMescla = {...configPadrao, ...preferenciasUsuario}

// TAREFA 2: Adicionar/sobrescrever propriedades específicas
// Crie um novo objeto a partir de produto, sobrescrevendo preco e adicionando estoque
// Resultado esperado: { id: 101, nome: "Notebook", preco: 2200, estoque: 50 }


const produtoAtualizado_ = {...produto, preco: 3500, estoque: 50}
console.log(produtoAtualizado);

// TAREFA 3: Criar objeto com propriedades condicionais
// Crie um novo objeto a partir de desconto, mas inclua a propriedade "codigo" 
// APENAS SE desconto.ativo for true
// Resultado: { percentual: 10, ativo: true, codigo: "DESC10" } (se ativo for true)

const _codigoDesconto = desconto.ativo ? {codigo: "desc10"} : {}
// Só adiciona o código do desconto se a condição for atendida (desconto.ativo == true)
// se não atender não sobrescreve, porque spread de um objeto vasio não sobrepoe nada.
const _novoDesconto = {...desconto, ..._codigoDesconto}
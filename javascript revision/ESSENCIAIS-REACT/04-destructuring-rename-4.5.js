// ⭐ PRIORIDADE MÁXIMA
// Ordem na lista de essenciais: 4
// Exercício original: 04-objetos/exercicio-04-05.js
// EXERCICIO APRIMORADO

// Exercício 4.5 - Destructuring com Renomeação
// Use destructuring para extrair propriedades e renomeá-las simultaneamente.


// Tarefa: Extraia as propriedades renomeando-as:
// - 'nome' renomeie para 'nomeProduto'
// - 'preco' renomeie para 'valor'
// - 'estoque' renomeie para 'quantidade'
//
// Sintaxe: const { propriedadeOriginal: novoNome } = objeto;

// Objeto de exemplo:
const produto = {
    id: 101,
    nome: "Notebook",
    preco: 3500,
    estoque: 15,
    categoria: "Eletrônicos"
};

const { nome: nomeProduto, preco: valor, estoque: quantidade} = produto
// Para renomear, basta fazer chave:novaChave como está acima.
// ISSO NÃO ALTERA AS PROPRIEDADES ORIGINAIS, É APENAS UMA CÓPIA.

console.log(`O produto é ${nomeProduto} e custa ${valor}`);



// ------ extra ------
// OBSERVE que o nome das propriedades do objeto original ainda SÃO OS MESMOS!

const {nome, preco} = produto

console.log(`O produto ainda é ${nome} e ainda custa ${preco}`)
// NÃO ALTEROU O OBJETO ORIGINAL.
// Poderia, se quisessse, desetruturar novamente, com um nome diferente.